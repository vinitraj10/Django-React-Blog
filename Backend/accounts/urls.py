from django.conf.urls import url
from accounts.views import UserCreateView
from rest_framework_jwt.views import obtain_jwt_token

app_name = 'accounts'

urlpatterns = [
	url(r'^register/$',UserCreateView.as_view(),name='accounts'),
	url(r'^auth/token/$',obtain_jwt_token)
]