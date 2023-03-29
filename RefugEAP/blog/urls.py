from django.conf import settings
from django.contrib import admin
from django.urls import path
from . import views
from .views import ReactBlogView;


urlpatterns = [
    path('', views.ReactBlogView, name='ReactBlogView'),
]