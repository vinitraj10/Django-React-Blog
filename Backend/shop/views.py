from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import (
	ListAPIView,
	RetrieveAPIView
)
from shop.serializers import (
	ProductSerializer,
	ProductDetailSerializer,
	MyRatingSerializer
)

from shop.models import (
	Product,
	Rating
)

class ProductListView(ListAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductSerializer

class ProductDetailView(RetrieveAPIView):
	queryset = Product.objects.all()
	serializer_class = ProductDetailSerializer
	lookup_field = 'pk' 

class ProductBuyView(APIView):
	def post(self,request,pk,format=None):
		product = Product.objects.get(pk=pk)
		user = request.user
		user.profile.product.add(product)
		return Response(status=status.HTTP_201_CREATED)

class MyOrderView(ListAPIView):
	def get_queryset(self):
		user = self.request.user
		return user.profile.product.all()
	serializer_class = ProductSerializer

class CreateRatingView(APIView):
	def post(self,request,pk,format=None):
		value = request.data['value']
		product = Product.objects.get(pk=pk)
		user = request.user
		for buyedProduct in user.profile.product.all():
			if buyedProduct == product:
				r=Rating(value=value,user=user,product=product)
				break
		r.save()
		return Response(status = status.HTTP_201_CREATED)

class EditMyRatingView(APIView):
	def post(self,request,pk,format=None):
		myrating = Rating.objects.get(pk=pk)
		value = request.data['value']
		myrating.value = value
		myrating.save()
		return Response(status = status.HTTP_200_OK)

class GetAverageRatingVieW(APIView):
	def get(self,request,pk,format=None):
		total = 0
		product = Product.objects.get(pk=pk)
		ratingObjects = product.rating.all()
		num = len(ratingObjects)
		for obj in ratingObjects:
			total+=obj.value
		try:
			avg = total/num
		except ZeroDivisionError:
			avg = 0
		return JsonResponse({'value':avg})

class MyRatingView(ListAPIView):
	def get_queryset(self):
		user = self.request.user
		return user.rating_set.all()
	serializer_class = MyRatingSerializer