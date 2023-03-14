from django.urls import path
from .views import ReactEventView,ReactReusepageview
from . import views

urlpatterns = [
    path('', views.ReactEventView, name='ReactEventView'),
    path('', views.ReactReusepageview, name='ReactReusepageview'),
    
]