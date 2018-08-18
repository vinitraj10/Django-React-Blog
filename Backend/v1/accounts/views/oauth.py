import json
import requests
from decouple import config
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.utility.oauth import oauth_create_or_get_token

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
