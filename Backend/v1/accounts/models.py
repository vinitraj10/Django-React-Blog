from django.db import models
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class Following(models.Model):
    profile = models.ForeignKey(User,on_delete=models.CASCADE)
    follower = models.ForeignKey(
                            User,
                            on_delete=models.CASCADE,
                            related_name='follower'
                )
    def __str__(self):
        return str(self.profile.username) + ' ' + str(self.follower.username)

class Profile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    college = models.CharField(max_length=200)
    picture = models.FileField(upload_to='profile_pic/')
    class Meta:
       verbose_name_plural='Profile'

    def __str__(self):
        return str(self.user.username)

class Skill(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return str(self.name)

class HasSkill(models.Model):
    profile = models.ForeignKey(Profile,on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.profile.user.username) + ' ' + str(self.skill.name)
