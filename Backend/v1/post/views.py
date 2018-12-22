from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import (
	CreateAPIView,
	DestroyAPIView,
	ListAPIView,
	RetrieveAPIView,
	RetrieveUpdateAPIView
)
from django.shortcuts import get_list_or_404
from rest_framework.permissions import(
	IsAuthenticatedOrReadOnly
)
from v1.post.serializers import (
	PostCreateSerializer,
	PostListSerializer,
	PostDetailSerializer
)
from v1.post.models import Post
from v1.post.permissions import IsOwnerOrReadOnly


class PostCreateView(CreateAPIView):
	serializer_class = PostCreateSerializer

	def perform_create(self,serializer):
		serializer.save(author=self.request.user)


class PostDeleteView(DestroyAPIView):
	lookup_field = 'pk'
	queryset = Post.objects.all()
	serializer_class = PostListSerializer


class PostListView(ListAPIView):
	queryset = Post.objects.all()
	serializer_class = PostListSerializer


class PostDetailView(RetrieveAPIView):
	lookup_field = 'pk'
	queryset = Post.objects.all()
	serializer_class = PostListSerializer


class PostUpdateView(RetrieveUpdateAPIView):
	lookup_field = 'pk'
	queryset = Post.objects.all()
	serializer_class = PostCreateSerializer
	permission_classes = (IsOwnerOrReadOnly,)


class AuthorPostView(APIView):

	@staticmethod
	def get(request, username):
		posts = get_list_or_404(Post, author__username=username)
		post_data = PostListSerializer(posts, many=True)
		return Response(post_data.data)
