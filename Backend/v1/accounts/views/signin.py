import json
import jwt
from datetime import datetime
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.validators.logvalidator import (
    check_credentials
)

@csrf_exempt
def signin_view(req):
    if req.method == 'POST':
        data = json.loads(req.body)
        username = data['username']
        password = data['password']
        time_now = str(datetime.now())
        # authenticate returns User from database
        # if not available it returns None
        user = authenticate(username=username, password=password)
        check_user = check_credentials(user)
        if check_user == 'exists':
            payload = {
                'email':user.email,
                'time_now':time_now
            }
            jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
            jwt_token = jwt_token.decode('utf-8')
            return JsonResponse({
                    'token':jwt_token,
                    'username':user.username,
                }, status=200)
        elif check_user == 'disabled':
            return JsonResponse({
                    'error':'Account Disabled'
                }, status=401)
        else:
            return JsonResponse({
                    'error':'Invalid credentials'
                }, status=401)
