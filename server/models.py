from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from config import db
from sqlalchemy_serializer import SerializerMixin

class Contact(db.Model, SerializerMixin):
    __tablename__ = 'contacts'

    id = Column(Integer, primary_key=True)
    full_name = Column(String(100))
    email = Column(String(100))
    message = Column(String(100))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def __repr__(self):
        return f"<Contact {self.full_name}>"
