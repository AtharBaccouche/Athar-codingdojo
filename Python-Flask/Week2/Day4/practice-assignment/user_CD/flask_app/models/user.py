from flask_app.config.mysqlconnection import connectToMySQL


class User:
    db_name = "Users"
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    #CRUD
    # Create 
    @classmethod
    def create_user(cls,data):
        # INSERT INTO users (first_name, last_name, Email) VALUES ("marwa", baccouche, "");

        query = "INSERT INTO users (first_name, last_name, email) VALUES (%(first_name)s,%(last_name)s,%(email)s);"
        result  = connectToMySQL(cls.db_name).query_db(query, data)
        print(result)
        return result

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users ;"

        results = connectToMySQL(cls.db_name).query_db(query)

        list_users_from_db = []
        for row in results:
            list_users_from_db.append(cls(row))
            
        return list_users_from_db


