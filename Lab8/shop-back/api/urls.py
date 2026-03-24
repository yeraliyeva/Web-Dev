from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/products/', views.product_list, name='product-list'),
    path('api/products/<int:id>/', views.product_detail, name='product-detail'),
    path('api/categories/', views.category_list, name='category-list'),
    path('api/categories/<int:id>/', views.category_detail, name='category-detail'),
    path('api/categories/<int:id>/products/', views.category_products, name='category-products'),
]
