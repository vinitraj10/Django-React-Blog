from django.conf.urls import url,include
from v1.accounts import views
urlpatterns = [
	url(r'^auth/register/',views.register)
]
