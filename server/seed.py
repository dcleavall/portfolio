from config import db, app
from models import Contact

# Seed Data and Create Tables for Database
if __name__ == '__main__':
    with app.app_context():
        print('Seeding...')
        db.create_all()

        # Clear existing data
        db.session.query(Contact).delete()

        # Define contact data
        contact_data = [
            {
                'full_name': 'John Doe',
                'email': 'john.doe@example.com',
                'message': 'Hello, this is John Doe.'
            },
            {
                'full_name': 'Jane Doe',
                'email': 'jane.smith@example.com',
                'message': 'Hi, this is Jane Smith.'
            },
            # Add more contact data as needed
        ]

        # Create Contact objects and add them to the database
        for data in contact_data:
            contact = Contact(
                full_name=data['full_name'],
                email=data['email'],
                message=data['message']
            )
            db.session.add(contact)

        # Commit the changes to the database
        db.session.commit()

        print('Seeding completed.')
