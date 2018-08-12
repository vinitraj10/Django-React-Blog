import json,jwt
from django.http import HttpResponse,JsonResponse
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.validators.regvalidator import (
    check_email,
    check_username
)

@csrf_exempt
def register(req):
    if req.method == 'POST':
        data = json.loads(req.body)
        email = data['email']
        username = data['username']
        password = data['password']
        if check_email(email) and check_username(username):
            # Create User
            new_user = User.objects.create_user(username,email,password)
            payload = {
                'id':new_user.id,
                'username':new_user.username,
                'email':new_user.email
            }
            jwt_token = jwt.encode(payload,'secret',algorithm='HS256')
            jwt_token = jwt_token.decode('utf-8')
            return JsonResponse({
                    'token':jwt_token,
                    'username':new_user.username,
                },status=201)
        else:
            return JsonResponse({'error':"Email or username exists"})
    else:
        return JsonResponse({'error':'Method not allowed'})
