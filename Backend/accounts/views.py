from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import (
	AllowAny
)

from accounts.serializers import UserCreateSerializer


User=get_user_model()

class UserCreateView(CreateAPIView):
	queryset=User.objects.all()
	serializer_class = UserCreateSerializer
	permission_classes = [AllowAny]
