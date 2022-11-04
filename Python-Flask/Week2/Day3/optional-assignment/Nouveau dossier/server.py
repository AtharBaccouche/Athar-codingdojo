from flask import Flask,render_template,session,request, redirect
app=Flask(__name__)
app.secret_key='shhhh'
@app.route('/')
def index():
    return render_template("index.html")
        
@app.route('/users', methods=['POST'])
def users():
    # print(request.form)
    session["first_name"]= request.form["first_name"]
    session["last_name"]= request.form["last_name"]
    session["email"]= request.form["email"]
    session["age"]= request.form["age"]

    print(session)
    return redirect('/display')


@app.route('/display')
def display():
    return render_template("display.html")
        


@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')












if __name__== "__main__":
    app.run(debug=True)


