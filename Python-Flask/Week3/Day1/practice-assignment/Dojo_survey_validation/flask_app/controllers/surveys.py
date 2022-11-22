from flask_app import app 
from flask import render_template,request,redirect
from flask_app.models.survey import Survey

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create', methods=['POST'])
def create_survey():
    Survey.create_survey(request.form)
    return redirect('/result')

@app.route('/result')
def index():
    return render_template('index2.html')
