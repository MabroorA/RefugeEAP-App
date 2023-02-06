from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from pages.models import Event


# Create your views here.

class HomePageView(TemplateView):
    template_name = 'home.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'

def ReactEventView(request):
    objects = Event.objects.all()
    data = [{'name': obj.name, 'date': obj.date, 'time': obj.time, 'more':obj.more} for obj in objects]
    return JsonResponse({'data': data})

# class YourModelViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all()
#     serializer_class = YourModelSerializer