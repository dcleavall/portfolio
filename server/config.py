# Remote library imports
from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt
from sqlalchemy.orm import Session
from os import environ
from dotenv import load_dotenv
from flask_cors import CORS
import stripe

# Initialize Stripe
stripe.api_key = environ.get('STRIPE_KEY')

load_dotenv('.env')
# Instantiate app, set attributesa
app = Flask(__name__, static_folder='../client/build', static_url_path='/')
app.secret_key = environ.get("APP_SECRET")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

# Define metadata, instantiate db
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)
Session(app)

# Instantiate BCrypt
bcrypt = Bcrypt(app)

# Instantiate REST API
api = Api(app)

CORS(app, supports_credentials=True)