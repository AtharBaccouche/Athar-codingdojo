from flask_app import app
from flask import render_template,request,redirect
from flask_app.models.dog import Dog
@app.route('/')
def index(): 
    return render_template('index.html')
    
@app.route('/dogs/new')
def new_dog():
    return render_template('new_dog.html')

@app.route('/dogs/create', methods=['POST'])
def create_dog():

    print("*********",request.form,"*******************")
    Dog.create_dog(request.form)
    return redirect('/')
