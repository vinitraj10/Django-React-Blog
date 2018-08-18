import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from v1.accounts.models import (
    User,
    Following
)
from v1.accounts.validators.authenticate import (
    verify_auth,
    is_owner
)

@csrf_exempt
def follow_view(req):
    try :
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login first'})
    data = json.loads(req.body)
    if(verify_auth(token) and is_owner(token,data['follower'])):
        if req.method == 'POST':
            username = data['username']
            follower = data['follower']
            profile = User.objects.get(username=username)
            follower = User.objects.get(username=follower)
            try:
                following = Following.objects.get(
                                profile=profile,
                                follower=follower
                            )
                return JsonResponse({'msg':'already following'})
            except Exception as e:
                following = Following.objects.create(
                                profile=profile,
                                follower=follower
                            )
                return JsonResponse({'msg':'following'})
        else:
            return JsonResponse({'error':'Method Not Allowed'})
    else:
        return JsonResponse({'error':'You are not the owner'})
