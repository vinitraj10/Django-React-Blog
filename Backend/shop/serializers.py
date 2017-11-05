from rest_framework.serializers import (
	ModelSerializer,
	SerializerMethodField
)
from shop.models import (
	Product,
	Rating
)

class ProductSerializer(ModelSerializer):
	class Meta:
		model = Product
		fields = ['id','title','cost']

class ProductDetailSerializer(ModelSerializer):
	class Meta:
		model = Product
		fields = ['id','title','description','cost']

class MyRatingSerializer(ModelSerializer):
	product = SerializerMethodField()
	class Meta:
		model = Rating
		fields = ['id','product','value']

	def get_product(self,obj):
		return str(obj.product.title)