from django.http import JsonResponse
from v1.accounts.models import (
    Skill,
    HasSkill,
)

def get_my_profile_skills(profile):
    skills = []
    for each in profile.hasskill_set.all():
        skills.append(each.skill.name)
    return skills

def skill_is_in_profile(skill,profile):
    profile_skills = get_my_profile_skills(profile)
    if skill.upper() not in profile_skills:
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
