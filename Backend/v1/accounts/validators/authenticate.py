import jwt
from django.contrib.auth.models import User

def verify_auth(token):
    try:
        req_user = jwt.decode(token, 'secret', algorithm='HS256')
    except:
        return False
    user = User.objects.get(id=req_user['id'])
    if user:
        return True
    return False

def is_owner(token,username):
    req_user = jwt.decode(token,'secret',algorithm='HS256')
    reqUser = User.objects.get(username=req_user['username'])
    owner = User.objects.get(username=username)
    return owner == reqUser
