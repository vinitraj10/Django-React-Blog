from django.contrib import admin
from shop.models import Product,Rating,Profile
# Register your models here.

admin.site.register(Product)
admin.site.register(Profile)
admin.site.register(Rating)
