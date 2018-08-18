import json
import jwt
from datetime import datetime
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.models import Profile
from v1.accounts.validators.regvalidator import (
    check_username,
    check_email
)

@csrf_exempt
def signup_view(req):
    if req.method == 'POST':
        data = json.loads(req.body)
        email = data['email']
        username = data['username']
        password = data['password']
        time_now = str(datetime.now())
        if check_email(email) and check_username(username):
            # Create new user
            new_user = User.objects.create_user(username, email, password)
            payload = {
                'email':new_user.email,
                'time_now':time_now
            }
            jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
            jwt_token = jwt_token.decode('utf-8')
            # Create User Profile
            Profile(user=new_user).save()
            return JsonResponse({
                        'token':jwt_token,
                        'username':new_user.username
                    }, status=201)
        else:
            return JsonResponse({'error':"Email or username exists"})
    return JsonResponse({'error':'Method not allowed'})
