from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReactReusepageview, name='ReactReusepageview'),
    path('getdata', views.getdata),



] 