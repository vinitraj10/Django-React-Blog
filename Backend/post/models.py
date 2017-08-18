from django.db import models

class Post(models.Model):
	title = models.CharField(max_length=100)
	content = models.TextField(max_length=200)
	published = models.DateField(auto_now=True) 

	def __str__(self):
		return str(self.title)
