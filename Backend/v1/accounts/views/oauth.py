import json
import jwt
import requests
from datetime import datetime
from decouple import config
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from v1.accounts.models import Profile

# it will return token for accessing dev-circle
def oauth_create_or_get_token(email):
    try:
        print(email)
        user = User.objects.get(email=email)
        print(user)
        time_now = str(datetime.now())
        payload = {
            'email':user.email,
            'time_now':time_now
        }
        jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
        jwt_token = jwt_token.decode('utf-8')
        return jwt_token
    except:
        time_now = str(datetime.now())
        new_user = User()
        new_user.email = email
        new_user.save()
        payload = {
            'email':new_user.email,
            'time_now':time_now
        }
        jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
        jwt_token = jwt_token.decode('utf-8')
        return jwt_token
@csrf_exempt
def github(req):
    code = req.GET['code']
    CLIENT_ID = config('CLIENT_ID')
    CLIENT_SECRET = config('CLIENT_SECRET')
    url = 'https://github.com/login/oauth/access_token/'
    headers = {'Accept': 'application/json'}
    params = {
        'client_id':CLIENT_ID,
        'client_secret':CLIENT_SECRET,
        'code':code
    }
    git_response = requests.post(url,headers=headers,params=params).json()
    access_token = git_response['access_token']
    user_url = 'https://api.github.com/user?access_token='+ access_token
    git_user_response = requests.get(user_url).json()
    email = git_user_response['email']
    token = oauth_create_or_get_token(email)
    print(token)
    return JsonResponse({'token':token})
