from django.urls import path
from . import views

urlpatterns = [
    path('donations', views.getDonations,name="donations"),
    path('getdata', views.getdata),



] 