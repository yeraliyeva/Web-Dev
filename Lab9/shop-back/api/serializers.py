from rest_framework import serializers
from .models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def validate(self, data):
        errors = {}

        if data.get('count') == 0:
            errors['count'] = "Product with count = 0 cannot be added."

        if data.get('is_active') is False:
            errors['is_active'] = "Inactive product cannot be added."

        if errors:
            raise serializers.ValidationError(errors)

        return data
