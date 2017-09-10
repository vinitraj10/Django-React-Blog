from rest_framework.serializers import (
	ModelSerializer,
	SerializerMethodField
)
from post.models import Post



class PostListSerializer(ModelSerializer):
	author = SerializerMethodField()
	class Meta:
		model=Post
		fields=['id','title','content','author','published']

	def get_author(self,obj):
		return str(obj.author.username)

class PostDetailSerializer(ModelSerializer):
	author = SerializerMethodField()
	class Meta:
		model=Post
		fields=['id','title','content','published','author','published']
		lookup_field='pk'

	def get_author(self,obj):
		return str(obj.author.username)

class PostCreateSerializer(ModelSerializer):
	author = SerializerMethodField()
	class Meta:
		model=Post
		fields=['title','content','author','published']
	
	def get_author(self,obj):
		return str(obj.author.username)