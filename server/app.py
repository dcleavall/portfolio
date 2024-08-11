from flask import make_response, jsonify, request
from flask_restful import Resource
from os import environ

#Internal Imports
from config import db, app, api
from models import Contact 


# Define route handlers
@app.route('/')
def index():
    return "Hello World!"


class Contact(Resource):  
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
        return make_response(jsonify(contact.to_dict()), 201)
    

api.add_resource(Contact, '/contact')

if __name__ == '__main__':
    app.run(debug=True)
