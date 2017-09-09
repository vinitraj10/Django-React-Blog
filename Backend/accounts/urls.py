from django.conf.urls import url
from .views import account
app_name = 'accounts'

urlpatterns = [
	url(r'^register/$',account,name='accounts')
]