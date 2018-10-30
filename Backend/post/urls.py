from django.conf.urls import url
from post.views import(
	PostCreateView,
	PostDetailView,
	PostDeleteView,
	PostListView,
	PostUpdateView,
)

app_name = 'post'

urlpatterns =  [

	url(r'^$',PostListView.as_view(),name='List'),
	url(r'^create',PostCreateView.as_view(),name='Create'),
	url(r'^detail/(?P<pk>[\d-]+)/$',PostDetailView.as_view(),name='Details'),
	url(r'^update/(?P<pk>[\d-]+)/$',PostUpdateView.as_view(),name='Update'),
	url(r'^delete/(?P<pk>[\d-]+)/$',PostDeleteView.as_view(),name='Delete'),

]
