from flask_app import app

from flask_app.controllers import recipies,users

if __name__=="__main__":
    app.run(debug=True)