from django.contrib import admin
from v1.accounts.models import (
    Profile,
    Skill,
    HasSkill,
    Following
)
# Register your models here.

admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(HasSkill)
admin.site.register(Following)
