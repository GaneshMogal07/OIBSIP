from flask import Flask, render_template, request, redirect, url_for, session, flash
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Dummy database (in-memory)
users_db = {}

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users_db:
            flash('Username already exists!')
        else:
            users_db[username] = generate_password_hash(password)
            flash('Registration successful! Please log in.')
            return redirect(url_for('home'))
    return render_template('register.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username in users_db and check_password_hash(users_db[username], password):
        session['username'] = username
        return redirect(url_for('secured'))
    flash('Invalid username or password!')
    return redirect(url_for('home'))

@app.route('/secured')
def secured():
    if 'username' not in session:
        return redirect(url_for('home'))
    return render_template('secured.html', username=session['username'])

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
