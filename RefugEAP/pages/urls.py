from django.urls import path
from .views import HomePageView, AboutPageView
from . import views

urlpatterns = [
    path('', views.index, name='index')
#     path('about/', AboutPageView.as_view(), name='about'),
#     path('', HomePageView.as_view(), name='home')
]