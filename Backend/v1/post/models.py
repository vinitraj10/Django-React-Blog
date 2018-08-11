from django.conf import settings
from django.db import models

class Post(models.Model):
	author = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	content = models.TextField(max_length=200)
	published = models.DateTimeField(auto_now_add=True) 

	def __str__(self):
		return str(self.title)
