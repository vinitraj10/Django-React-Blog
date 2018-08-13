import json,jwt
from django.http import HttpResponse,JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.validators.regvalidator import (
    check_email,
    check_username
)
from v1.accounts.validators.logvalidator import (
    check_credentials
)
from v1.accounts.models import Profile
# Registration Function
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
            # Create User Profile
            Profile(user=new_user).save()
            return JsonResponse({
                    'token':jwt_token,
                    'username':new_user.username,
                },status=201)
        else:
            return JsonResponse({'error':"Email or username exists"})
    else:
        return JsonResponse({'error':'Method not allowed'})
# Login Function
@csrf_exempt
def login(req):
    if req.method == 'POST':
        data = json.loads(req.body)
        username = data['username']
        password = data['password']
        # authenticate returns User from database
        # if not available it returns None
        user = authenticate(username=username,password=password)
        check_user = check_credentials(user)
        if check_user == 'exists':
            payload = {
                'id':user.id,
                'username':user.username,
                'email':user.email
            }
            jwt_token = jwt.encode(payload,'secret',algorithm='HS256')
            jwt_token = jwt_token.decode('utf-8')
            return JsonResponse({
                    'token':jwt_token,
                    'username':user.username,
                },status=200)
        elif check_user == 'disabled':
            return JsonResponse({
                'error':'Account Disabled'
                },status=401)
        else:
            return JsonResponse({
                'error':'Invalid credentials'},
                status=401)

@csrf_exempt
def update_profile(req):
    if req.method == 'PUT':
        data = json.loads(req.body)
        username = data['username']
        college = data['college']
        picture = data['picture']
        user = User.objects.get(username=username)
        profile = Profile.objects.get(user=user)
        profile.college = college
        profile.picture = picture
        profile.save()
        return JsonResponse({'success':'Profile Updated'})
    return JsonResponse({'error':'Method Not Allowed'})

# Design a decorator for checking authentication
def get_my_profile(req):
    user = User.objects.get(username='raj10')
    profile = Profile.objects.get(user=user)
    username = profile.user.username
    college = profile.college
    picture = json.dumps(str(profile.picture))
    data = {
        'username':username,
        'college':college,
        'picture':picture
    }
    return JsonResponse(data)
