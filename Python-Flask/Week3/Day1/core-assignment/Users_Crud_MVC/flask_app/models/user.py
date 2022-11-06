from flask_app.config.mysqlconnection import connectToMySQL


class User:
    db_name = "Users_tt"
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
    

    @classmethod
    def update(cls,data):
        query = "UPDATE users SET first_name=%(first_name)s,last_name=%(last_name)s,email=%(email)s,updated_at=NOW() WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

    @classmethod
    def destroy(cls,data):
        query  = "DELETE FROM users WHERE id = %(id)s;"
        return connectToMySQL(cls.db_name).query_db(query,data)

    @classmethod
    def get_one(cls,data):
        query  = "SELECT * FROM users WHERE id = %(id)s";
        result = connectToMySQL(cls.db_name).query_db(query,data)
        return cls(result[0])
