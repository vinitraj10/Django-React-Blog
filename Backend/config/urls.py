from django.contrib import admin
from django.conf import settings
from django.urls import (
    include,
    re_path,
    path
)
from django.conf.urls.static import static

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^blog/api/',include('v1.post.urls'),name='blog'),
    re_path(r'^accounts/api/',include('v1.accounts.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
