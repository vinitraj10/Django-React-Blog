# Overview
This application is a simple sho where user can buy the products and rate there buyed product,edit there ratings and get overall average rating of any product.

<h3>Instructions:-</h3>
<ul>
<li>1.)Only admin can add products.</li>
<li>2.)You need to logged in to buy products</li>
<li>3.)User can only rate there buyed product</li>
<li>4.)User can edit there given ratings</li>
</ul>

# Backend-Setup 
```
Create Virtual env for django-part:-
```
cd Django-React-Blog
virtualenv app
```
Activate Virtual env:-
```
app\scripts\activate
```
Install Dependencies:-
```
cd Backend
pip install -r requirements.txt
```
Make Migrations:-
```
./manage.py makemigrations
./manage.py migrate
```
Start server for your REST-API:-
```
./manage.py runserver
```
# Frontend Setup:-
Go to root and Open another terminal window
```
cd Frontend
```
Install Dependencies:-
```
npm install
```
Run Server:-
```
npm run dev
```

So apparently to server is running one is localhost:8000(clientside react) and second is localhost:8080(django-api) So to see live application open http://localhost:8000 in your browser window
