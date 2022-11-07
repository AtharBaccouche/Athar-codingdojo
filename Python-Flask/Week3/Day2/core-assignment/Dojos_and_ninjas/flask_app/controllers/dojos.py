from flask_app import app 
from flask import render_template, request, redirect
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/')
def index():
    list_dojos= Dojo.get_all()
    return render_template('dojos.html',dojos=list_dojos)

@app.route('/dojo', methods=['POST'])
def create_dojo():
    print("************",request.form,"***************")
    Dojo.create_dojo(request.form)
    return redirect('/')

@app.route('/ninja', methods=['POST'])
def create_ninja():
    print("************",request.form,"***************")
    Ninja.create_ninja(request.form)
    return redirect('/')


@app.route('/ninjas')
def new_ninja () :
    list_dojos=Dojo.get_all()
    return render_template ('new_ninja.html',dojos = list_dojos)
    
@app.route('/dojos/<int:id>')
def show_dojo(id):
    data = {
        'id':id
    }
    ninjas = Ninja.get_ninjas_by_dojo_id(data)
    dojo = Dojo.get_one_by_id(data)
    return render_template('show_dojo.html', ninjas=ninjas ,dojo=dojo)