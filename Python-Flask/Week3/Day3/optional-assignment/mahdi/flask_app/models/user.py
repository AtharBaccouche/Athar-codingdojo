from flask_app.config.mysqlconnection import connectToMySQL
import re	# the regex module
# create a regular expression object that we'll use later   
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
from flask import flash
class User:
    db_name="exem"
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password=data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_user(cls,data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(password)s);"
        return connectToMySQL(cls.db_name).query_db(query, data)

    @classmethod
    def get_one_by_email(cls,data):
        query="SELECT *FROM users WHERE email=%(email)s;"
        result=connectToMySQL(cls.db_name).query_db(query, data)
        if len(result)<1:
            return False
        return cls(result[0])

    
    @classmethod
    def get_one_by_id(cls,data):
        query="SELECT *FROM users WHERE id=%(id)s;"
        result=connectToMySQL(cls.db_name).query_db(query, data)
        return cls(result[0])

    @classmethod
    def get_all(cls,data):
        query="SELECT *FROM users;"
        results=connectToMySQL(cls.db_name).query_db(query, data)
        users=[]
        for row in results:
            users.append(cls(row))
        return users

    @staticmethod
    def validate_register(data):
        is_valid=True
        query="SELECT *FROM users WHERE email=%(email)s;"
        result=connectToMySQL(User.db_name).query_db(query, data)
        if len(result)>=1:
            flash("email already exists")
            is_valid=False
        if not EMAIL_REGEX.match(data['email']):
            flash("Incorrect Email")
            is_valid=False

        if len(data['first_name'])<3:
            flash("first Name must be at least 3 characters")
            is_valid=False
        if len(data['last_name'])<3:
            flash("last Name must be at least 3 characters")
            is_valid=False
        if len(data['password'])<8:
            flash("Password must be at least 8 characters")
            is_valid=False
        if (data['password']!=data['confirm_password']):
            flash("Password don't match")
            is_valid=False
        return is_valid
    
    