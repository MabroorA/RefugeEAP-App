from django.shortcuts import render
from django.views import generic 
from blog.models import Blog
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST', 'PUT','DELETE'])
def ReactBlogView(request):
    objects = Blog.objects.all()
    data = [{'title': obj.title, 'subtitle': obj.subtitle, 'body': obj.body, 'slug': obj.slug, 'author': obj.author, 'published_date': obj.published_date,  'last_updated': obj.last_updated} for obj in objects]
    return Response({'data': data})

