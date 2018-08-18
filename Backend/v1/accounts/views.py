import json
import jwt
import requests
from django.http import JsonResponse
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

from v1.accounts.validators.authenticate import (
    verify_auth,
    is_owner
)

from v1.accounts.models import (
    Profile,
    Skill,
    HasSkill,
    Following
)

from v1.accounts.utility.profile import (
    get_my_profile_skills,
    skill_is_in_profile
)
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
            new_user = User.objects.create_user(username, email, password)
            payload = {
                'id':new_user.id,
                'username':new_user.username,
                'email':new_user.email
            }
            jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
            jwt_token = jwt_token.decode('utf-8')
            # Create User Profile
            Profile(user=new_user).save()
            return JsonResponse({
                        'token':jwt_token,
                        'username':new_user.username
                    }, status=201)
        else:
            return JsonResponse({'error':"Email or username exists"})
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
        user = authenticate(username=username, password=password)
        check_user = check_credentials(user)
        if check_user == 'exists':
            payload = {
                'id':user.id,
                'username':user.username,
                'email':user.email
            }
            jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
            jwt_token = jwt_token.decode('utf-8')
            return JsonResponse({
                'token':jwt_token,
                'username':user.username,
                }, status=200)
        elif check_user == 'disabled':
            return JsonResponse({
                'error':'Account Disabled'
                }, status=401)
        else:
            return JsonResponse({
                'error':'Invalid credentials'
                }, status=401)

@csrf_exempt
def update_profile(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
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
                return JsonResponse({
                            'success':'Profile Updated'
                        }, status=200)
            return JsonResponse({
                        'error':'Method Not Allowed'
                        }, status=405)
        else:
            return JsonResponse({
                        'error':'You are not the owner'
                    })
    except:
        return JsonResponse({
                        'error':'Please Login First'
                    })

@csrf_exempt
def update_profile_skills(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
        if (verify_auth(token) and is_owner(token,data['username'])):
            if req.method == 'PUT':
                username = data['username']
                skill = data['skill']
                user = User.objects.get(username=username)
                profile = Profile.objects.get(user=user)
                flag = skill_is_in_profile(skill, profile)
                if flag[0]:
                    return JsonResponse({
                            'skills':flag[1]
                        }, status=200)
                else:
                    return JsonResponse({
                                'error':flag[1]
                        }, status=403)
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
    except:
        return JsonResponse({'error':'Please login first'})

'''
def get_my_profile(req):
    user = User.objects.get(username='raj10')
    profile = Profile.objects.get(user=user)
    username = profile.user.username
    college = profile.college
    picture = json.dumps(str(profile.picture))
    skills = get_my_profile_skills(profile) # return list of skills from object.
    data = {
        'username':username,
        'college':college,
        'picture':picture,
        'skills':skills
    }
    return JsonResponse(data, status=200)
'''
@csrf_exempt
def follow_profile(req):
    data = json.loads(req.body)
    try :
        token = req.META['HTTP_AUTHORIZATION']
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
            print("fired")
            return JsonResponse({'error':'You are not the owner'})
    except:
        return JsonResponse({'error':'Please login first'})

@csrf_exempt
def unfollow_profile(req):
    data = json.loads(req.body)
    try:
        token = req.META['HTTP_AUTHORIZATION']
        if(verify_auth(token) and is_owner(token,data['username'])):
            if req.method == 'DELETE':
                data = json.loads(req.body)
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
    except:
        return JsonResponse({'error':'Please login first'})

@csrf_exempt
def github(req):
    code = req.GET['code']
    client_id = '87f79de4f9f2a46069b7'
    client_secret = '143386855d09a461bea81ec4b1563e961e3a613f'
    url = 'https://github.com/login/oauth/access_token/'
    post_data = {
                    'client_id':client_id,
                    'client_secret':client_secret,
                    'code':code
                }
    r = requests.post(url,data=json.dumps(post_data))
    print(r.json())
    return JsonResponse({})
