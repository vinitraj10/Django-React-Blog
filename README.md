# Overview
This application helps the user to Read,Create,Delete,Update the Blog post,The app uses Django Rest Framework For the restful api and React and Redux for managing The view and the application state.

<h3>Feautures:-</h3>
<ul>
<li>Single Page App</li>
<li>Create Post</li>
<li>Read Post</li>
<li>Update Post</li>
<li>Delete Post</li>
</ul>

Anyone Can add post or delete post,The app doesn't contain any authentication,This is just a Simple blog,The main motive of this app is to learn how to call api's in react and manage the state of the application to update the view.

Please follow the setup instrutions as follow in order to view the complete app we need to setup our backend and frontend separately so be carefull otherwise there could be problems.

# Backend-Setup 

clone the repositroy:-
```
git clone https://github.com/vinitraj10/Django-React-Blog 
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
cd Blog
pip install requirements.txt
```
Make Migrations:-
```
python manage.py makemigrations
python manage.py migrate
```
Start server for your REST-API:-
```
python manage.py runserver
```
#Frontend Setup:-
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
