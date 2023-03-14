from django.shortcuts import render
from django.views.generic import TemplateView
from pages.models import Event
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.
class HomePageView(TemplateView):
    template_name = 'home.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'

@api_view(['GET'])
def ReactEventView(request):
    objects = Event.objects.all()
    data = [{'name': obj.name, 'date': obj.date, 'time': obj.time, 'more':obj.more} for obj in objects]
    return Response({'data': data})
