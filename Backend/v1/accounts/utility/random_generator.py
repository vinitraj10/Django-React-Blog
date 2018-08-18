import random
import string
from django.contrib.auth.models import User

def generate_username():
    return ''.join(
                random.SystemRandom().choice(
                    string.ascii_uppercase
                    + string.digits
            ) for _ in range(8))
