import jwt
from datetime import datetime
from django.contrib.auth.models import User
from v1.accounts.models import Profile
from v1.accounts.utility.random_generator import generate_username

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
        return (jwt_token,user.username)
    except:
        time_now = str(datetime.now())
        username = generate_username()
        new_user = User.objects.create(username=username,email=email)
        payload = {
            'email':new_user.email,
            'time_now':time_now
        }
        jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
        jwt_token = jwt_token.decode('utf-8')
        return (jwt_token,username)
