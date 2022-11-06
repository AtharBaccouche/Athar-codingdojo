from flask_app import app 
from flask import render_template, request, redirect
from flask_app.models.user import User


@app.route('/')
def index():
    list_users=User.get_all()
    return render_template('index.html',users=list_users)

@app.route('/user/new')
def new_user():
    return render_template('new_user.html')

@app.route('/user/create',methods=['POST'])
def create_user():
    print("************",request.form,"***************")
    User.create_user(request.form)
    return redirect('/')

@app.route('/user/show/<int:id>')
def show(id):
    data ={ 
        "id":id
    }
    return render_template("read_one.html",user=User.get_one(data))

@app.route('/user/edit/<int:id>')
def edit(id):
    data ={ 
        "id":id
    }
    return render_template("edit.html",user=User.get_one(data))

@app.route('/user/update',methods=['POST'])
def update():
    User.update(request.form)
    return redirect('/')

@app.route('/user/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    User.destroy(data)
    return redirect('/')

