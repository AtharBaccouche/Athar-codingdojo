from flask_app.config.mysqlconnection import connectToMySQL
class Dog:
    db_name="dogs_and_toys"
    def _init_(self,data):
        self.id=data['id']
        self.name=data['name']
        self.age=data['age']
        self.hair_color=data['hair_color']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        
        #CRUD
    @classmethod  
    def create_dog(cls,data):
        #INSERT INTO dogs (name, age, hair_color) VALUES ("REX",4,"Black and Orange")
        query= "INSERT INTO dogs (name, age, hair_color) VALUES (%(name)s,%(age)s,%(hair_color)s);"
        result=connectToMySQL(cls.db_name).query_db(query,data)
        print(result)
        return result