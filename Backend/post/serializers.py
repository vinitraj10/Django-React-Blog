from rest_framework.serializers import ModelSerializer
from post.models import Post



class PostListSerializer(ModelSerializer):
	class Meta:
		model=Post
		fields=['id','title','content']

class PostDetailSerializer(ModelSerializer):
	class Meta:
		model=Post
		fields=['id','title','content','published']
		lookup_field='pk'

class PostCreateSerializer(ModelSerializer):
	class Meta:
		model=Post
		fields=['title','content']
		