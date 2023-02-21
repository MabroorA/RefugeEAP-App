from django.urls import path
from .views import ReactEventView
from . import views

urlpatterns = [
    path('', views.ReactEventView, name='ReactEventView')
#     path('about/', AboutPageView.as_view(), name='about'),
#     path('', HomePageView.as_view(), name='home')
]