from django.http import JsonResponse
from v1.accounts.models import (
    Skill,
    HasSkill,
)

def skills_to_list(profile):
    my_skills = []
    for each in profile.hasskill_set.all():
        my_skills.append(each.skill.name)
    return my_skills

def get_my_profile_skills(profile):
    my_skills = []
    for each in profile.hasskill_set.all():
        my_skills.append({
                'id':each.skill.id,
                'name':each.skill.name
        })
    return my_skills

def skill_is_in_profile(skill,profile):
    my_profile_skills = skills_to_list(profile)
    if skill.upper() not in my_profile_skills:
        try:
            # get skill from database of the name provided by user
            skill_db = Skill.objects.get(name = skill.upper())
            HasSkill.objects.create(profile = profile,skill = skill_db)
        except Exception as e:
            # if skill do not exists in db,create skill of that name
            new_skill_db = Skill.objects.create(name = skill.upper())
            HasSkill.objects.create(profile = profile,skill = new_skill_db)
        return (1,get_my_profile_skills(profile))
    else:
        return (0,'Skill already exists')
