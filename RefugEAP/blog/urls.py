from django.conf import settings
from django.contrib import admin
from django.urls import path
from . import views
from .views import homepage, post, about, postlist, allposts


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.blog, name='blog'),
    path('post/<slug>/', post, name = 'post')
   
]