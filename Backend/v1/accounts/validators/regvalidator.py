from django.contrib.auth.models import User

def check_email(email):
    try:
        if User.objects.get(email=email):
            return False # Email Exists
    except:
        return True # Email allowed
def check_username(username):
    try:
        if User.objects.get(username=username):
            return False # username taken
    except:
        return True # username available
