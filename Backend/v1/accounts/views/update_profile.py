import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from v1.accounts.models import Profile
from v1.accounts.validators.authenticate import (
    verify_auth,
    is_owner
)

@csrf_exempt
def update_profile_view(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please Login First'})
    if(verify_auth(token) and is_owner(token,data['username'])):
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
            return JsonResponse({'success':'Profile Updated'}, status=200)
        return JsonResponse({'error':'Method Not Allowed'}, status=405)
    else:
        return JsonResponse({'error':'You are not the owner'},status=401)
