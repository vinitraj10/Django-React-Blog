import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from v1.accounts.validators.authenticate import (
    verify_auth,
    is_owner
)
from v1.accounts.models import (
    Profile,
    Skill,
    HasSkill
)

from v1.accounts.utility.profile import (
    get_my_profile_skills,
    skill_is_in_profile
)


@csrf_exempt
def update_profile_skills_view(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
    except:
        return JsonResponse({'error':'Please login first'})
    if (verify_auth(token) and is_owner(token,data['username'])):
        if req.method == 'POST':
            username = data['username']
            skill = data['skill']
            user = User.objects.get(username=username)
            profile = Profile.objects.get(user=user)
            flag = skill_is_in_profile(skill, profile)
            if flag[0]:
                return JsonResponse({'skills':flag[1]}, status=200)
            else:
                return JsonResponse({'error':flag[1]}, status=403)
        elif req.method == 'DELETE':
            data = json.loads(req.body)
            username = data['username']
            skill_id = data['skill_id']
            user = User.objects.get(username=username)
            profile = Profile.objects.get(user=user)
            skill = Skill.objects.get(id=skill_id)
            skill_from_profile = HasSkill.objects.get(
                                    profile=profile,
                                    skill=skill
                                )
            skill_from_profile.delete()
            return JsonResponse({
                        'success':'Succesfully Deleted'
                    }, status=200)
        else:
            return JsonResponse({'error':'Method Not Allowed'})
    else:
        JsonResponse({'error':'You are not the owner'})
