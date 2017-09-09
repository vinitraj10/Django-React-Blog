from django.contrib.auth import get_user_model

from rest_framework.serializers import(
	CharField,
	ModelSerializer,
	SerializerMethodField,
	ValidationError
)

from rest_framework_jwt.settings import api_settings

User = get_user_model()

class UserCreateSerializer(ModelSerializer):
	token = SerializerMethodField()
	class Meta:
		model = User
		fields = [
			'email',
			'username',
			'password',
			'token'
		]
		extra_kwargs = {"password":{"write_only":True}}
		
	def get_token(self,object):
		jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
		jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

		payload = jwt_payload_handler(object)
		token = jwt_encode_handler(payload)
		return token

	def create(self,validated_data):
		user = User.objects.create(
			email=validated_data['email'],
			username=validated_data['username'],
		)
		user.set_password(validated_data['password'])
		user.save()
		return user