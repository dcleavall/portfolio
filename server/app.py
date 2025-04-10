from flask import make_response, jsonify, request, send_from_directory
from flask_restful import Resource
from os import environ
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


# Internal Imports
from config import db, app, api, stripe
from models import Contact 
from dotenv import load_dotenv


# Initialize Stripe with your secret key
stripe.api_key = environ.get('STRIPE_KEY')

load_dotenv('.env')

# Route for serving static files (JS, CSS, etc.)
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(os.path.join(app.static_folder, 'static'), path)

# Catch-all route to serve index.html for frontend routes (React Router handles this)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_index(path):
    print(f"Requested path: {path}")
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(app.static_folder, 'favicon.ico')

@app.route('/manifest.json')
def manifest():
    return send_from_directory(app.static_folder, 'manifest.json')

@app.route('/logo192.png')
def logo192():
    return send_from_directory(app.static_folder, 'logo192.png')

@app.route('/logo512.png')
def logo512():
    return send_from_directory(app.static_folder, 'logo512.png')

@app.route('/about.jpg')
def about():
    return send_from_directory(app.static_folder, 'about.jpg')

@app.route('/freelance.png')
def freelance():
    return send_from_directory(app.static_folder, 'freelance.png')

@app.route('/homepage.jpg')
def homepage():
    return send_from_directory(app.static_folder, 'homepage.jpg')

@app.route('/plants.png')
def plants():
    return send_from_directory(app.static_folder, 'plants.png')

 

class ContactResource(Resource):
    def get(self):
        contacts = Contact.query.all()
        contact_list = [contact.to_dict() for contact in contacts]
        return jsonify(contact_list) 

    def post(self):
        data = request.get_json()
        full_name = data.get('full_name')
        email = data.get('email')
        message = data.get('message')

        if not full_name or not email or not message:
            return make_response(jsonify(message="Missing required fields"), 400)
        
        contact = Contact(full_name=full_name, email=email, message=message)
        db.session.add(contact)
        db.session.commit()

        # Send email notification
        self.send_email(full_name, email, message)
        
        return make_response(jsonify(contact.to_dict()), 201)
    
    def send_email(self, full_name, email, message):
        smtp_server = 'smtp.gmail.com'
        smtp_port = 587
        smtp_user = 'dcleavallcodes@gmail.com'
        smtp_password = environ.get('EMAIL_SECRET')
        to_email = 'dcleavallcodes@gmail.com'

        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = to_email
        msg['Subject'] = 'New Contact Form Submission'

        body = f"""
        You have a new contact form submission:

        Full Name: {full_name}
        Email: {email}
        Message: {message}
        """
        msg.attach(MIMEText(body, 'plain'))

        try:
            print(f'Connecting to {smtp_server} on port {smtp_port}...')
            with smtplib.SMTP(smtp_server, smtp_port) as server:
                server.starttls()
                print('Logging in...')
                server.login(smtp_user, smtp_password)
                print('Sending message...')
                server.send_message(msg)
            print('Email sent successfully!')
        except smtplib.SMTPAuthenticationError:
            print('SMTP Authentication Error: Check your email and password.')
        except Exception as e:
            print(f'Failed to send email: {e}')

class PaymentIntentResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            amount = data.get('amount')

            if amount is None or amount < 50:
                return make_response(jsonify(message="Amount must be at least $0.50 USD"), 400)

            # Create a PaymentIntent
            payment_intent = stripe.PaymentIntent.create(
                amount=amount,  # Amount in cents
                currency='usd',
                payment_method_types=['card'],
            )

            return jsonify({
                'clientSecret': payment_intent.client_secret
            })
        except Exception as e:
            print(f'Failed to create PaymentIntent: {e}')
            return make_response(jsonify(error=str(e)), 500)




# Stripe Webhook Endpoint
@app.route('/webhook', methods=['POST'])
def stripe_webhook():
    payload = request.get_data(as_text=True)
    sig_header = request.headers.get('Stripe-Signature')
    endpoint_secret = environ.get('STRIPE_ENDPOINT_SECRET')

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError:
        return jsonify({'error': 'Invalid payload'}), 400
    except stripe.error.SignatureVerificationError:
        return jsonify({'error': 'Invalid signature'}), 400

    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        print(f'PaymentIntent was successful!')

    return jsonify({'status': 'success'})

api.add_resource(PaymentIntentResource, '/create-payment-intent')
api.add_resource(ContactResource, '/contact')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
