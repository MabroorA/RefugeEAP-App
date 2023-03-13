from django.urls import path
from .views import ReactEventView
from . import views

urlpatterns = [
    path('', views.ReactEventView, name='ReactEventView')
]