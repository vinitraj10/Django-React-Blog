from post.models import Post
from rest_framework.serializers import (
	ModelSerializer,
	StringRelatedField
)


class PostListSerializer(ModelSerializer):
	
	author = StringRelatedField()
	
	class Meta:
		model = Post
		fields = ('id', 'title', 'content', 'author', 'published')


class PostDetailSerializer(ModelSerializer):

	author = StringRelatedField()

	class Meta:

		model = Post
		lookup_field = 'pk'
		fields = ('id', 'title', 'content', 'published', 'author', 'published')


class PostCreateSerializer(ModelSerializer):
	
	author = StringRelatedField()
	
	class Meta:
		model = Post
		fields = ('title', 'content', 'author', 'published')
