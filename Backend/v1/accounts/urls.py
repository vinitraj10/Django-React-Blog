from django.conf.urls import url,include
from v1.accounts import views
urlpatterns = [
	url(r'^auth/register/',views.register),
	url(r'^auth/login/',views.login),
	url(r'^update/profile/',views.update_profile),
	url(r'^getmyprofile/',views.get_my_profile)
]
