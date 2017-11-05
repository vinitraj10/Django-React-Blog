"""Blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from shop.views import (
    ProductListView,
    ProductDetailView,
    ProductBuyView,
    MyOrderView,
    CreateRatingView,
    EditMyRatingView,
    MyRatingView,
    GetAverageRatingVieW
)

urlpatterns = [
    url(r'^$',ProductListView.as_view(),name='products'),
    url(r'^detail/(?P<pk>[\d-]+)/product/$',ProductDetailView.as_view(),name='product-detail'),
    url(r'^buy/(?P<pk>[\d-]+)/product/$',ProductBuyView.as_view(),name='product-buy'),
    url(r'^myorders/$',MyOrderView.as_view(),name='my-orders'),
    url(r'^myrating/$',MyRatingView.as_view(),name='my-rating'),
    url(r'^rate/(?P<pk>[\d-]+)/product/$',CreateRatingView.as_view(),name='rate-product'),
    url(r'^getavgrating/(?P<pk>[\d-])/product/$',GetAverageRatingVieW.as_view(),name='getavgrating'),
    url(r'^editmyrating/(?P<pk>[\d-])/product/$',EditMyRatingView.as_view(),name='editmyrating')
   
]

