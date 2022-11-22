from flask_app.config.mysqlconnection import connectToMySQL


class Survey:
    db_name = "dojo_survey"
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment=data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create_survey(cls,data):
        query = "INSERT INTO dojo (name, location, language, comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"
        result  = connectToMySQL(cls.db_name).query_db(query, data)
        print(result)
        return result