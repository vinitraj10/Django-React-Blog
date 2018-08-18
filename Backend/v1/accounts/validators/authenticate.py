import jwt
from django.contrib.auth.models import User

def verify_auth(token):
    try:
        req_user = jwt.decode(token, 'secret', algorithm='HS256')
    except:
        return False
    user = User.objects.get(email=req_user['email'])
    if user:
        return True
    return False

def is_owner(token,username):
    req_user = jwt.decode(token,'secret',algorithm='HS256')
    reqUser = User.objects.get(email=req_user['email'])
    owner = User.objects.get(username=username)
    return owner == reqUser
