# @app.route
# burgers.py
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import users
@app.route('/users')#why
def users():
    return render_templates('results.html')

from flask_app.models.burger import Burger
# gets all the burgers and returns them in a list of burger objects .
@app.route('/create/burger',methods=['POST'])
def create_burger():
	data = {

        "name" : request.form['name'],
        "bun" : request.form['bun'],
        "meat" : request.form['meat'],
        "calories" : request.form['calories']
	}
	Burger.save(data)
	return redirect('/burgers')
