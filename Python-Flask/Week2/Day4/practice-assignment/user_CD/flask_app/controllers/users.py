from flask_app import app 
from flask import render_template, request, redirect
from flask_app.models.user import User

@app.route('/')
def index():

    list_users = User.get_all()
    
    return render_template('read.html', users = list_users)

@app.route('/users/new')
def new_user():
    return render_template('create.html')

@app.route('/users/create', methods=['POST'])
def create_user():
    print("************",request.form,"***************")
    User.create_user(request.form)
    return redirect('/')