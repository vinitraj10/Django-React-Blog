from django.conf.urls import url,include
from v1.accounts import views
urlpatterns = [
	url(r'^auth/register/$',views.register),
	url(r'^auth/login/$',views.login),
	url(r'^auth/github/$',views.github),
	url(r'^update/profile/$',views.update_profile),
	url(r'^update/profile/skills/',views.update_profile_skills),
	url(r'^follow/$',views.follow_profile),
	url(r'^unfollow/$',views.unfollow_profile),
]
