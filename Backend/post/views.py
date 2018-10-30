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
from post.permissions import IsOwnerOrReadOnly


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
	queryset = Post.objects.all()
	serializer_class = PostCreateSerializer
	permission_classes = (IsOwnerOrReadOnly, )
	lookup_field = 'pk'
