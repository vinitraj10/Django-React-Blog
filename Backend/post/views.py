from rest_framework.generics import (
	CreateAPIView,
	DestroyAPIView,
	ListAPIView,
	RetrieveAPIView,
	RetrieveUpdateAPIView
)

from rest_framework.permissions import(
	IsAuthenticatedOrReadOnly
)

from post.serializers import (
	PostCreateSerializer,
	PostListSerializer,
	PostDetailSerializer
)
from post.models import Post


class PostCreateView(CreateAPIView):
	queryset=Post.objects.all()
	serializer_class=PostCreateSerializer

class PostDeleteView(DestroyAPIView):
	queryset=Post.objects.all()
	serializer_class=PostListSerializer
	lookup_field='pk'

class PostListView(ListAPIView):
	queryset=Post.objects.all()
	serializer_class=PostListSerializer

class PostDetailView(RetrieveAPIView):
	queryset=Post.objects.all()
	serializer_class=PostListSerializer
	lookup_field='pk'

class PostUpdateView(RetrieveUpdateAPIView):
	queryset=Post.objects.all()
	serializer_class=PostCreateSerializer
	lookup_field='pk'

