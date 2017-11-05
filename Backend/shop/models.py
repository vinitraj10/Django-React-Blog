from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

class Product(models.Model):
	title = models.CharField(max_length=100)
	description = models.TextField()
	cost = models.FloatField()

	def __str__(self):
		return str(self.title) 

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)

    def __str__(self):
    	return str(self.user)
    	
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

class Rating(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
	product = models.ForeignKey(Product,on_delete=models.CASCADE,related_name='rating')
	value = models.IntegerField()

	def __str__(self):
		return ("Rating of " + str(self.product.title) + " by " + str(self.user))