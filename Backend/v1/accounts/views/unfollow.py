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
def unfollow_view(req):
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login first'})
    data = json.loads(req.body)
    if(verify_auth(token) and is_owner(token,data['username'])):
        if req.method == 'DELETE':
            username = data['username']
            following = data['following']
            profile = User.objects.get(username = following)
            follower = User.objects.get(username = username)
            try:
                unfollow = Following.objects.get(
                                profile=profile,
                                follower=follower
                            )
                unfollow.delete()
                return JsonResponse({'message':'Unfollowed'+' '+following})
            except:
                return JsonResponse({'error':'You do not follow the user'})
        return JsonResponse({'error':'Method Not allowed'})
    else:
        return JsonResponse({'error':'You are not the owner'})
