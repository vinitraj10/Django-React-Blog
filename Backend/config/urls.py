from django.contrib import admin
from django.conf import settings
from django.conf.urls import url,include
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^blog/api/',include('v1.post.urls'),name='blog'),
    url(r'^accounts/api/',include('v1.accounts.urls'))
]
urlpatterns+=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
