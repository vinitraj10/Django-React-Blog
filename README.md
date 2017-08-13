# Overview
This application helps the user to Read,Create,Delete,Update the Blog post,The app uses Django Rest Framework For the restful api and React and Redux for managing The view and the application state.

Feautures:-
1.)Single Page Application
2.)Read Post
3.)Create Post
4.)Update Post
5.)Delete Post

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

