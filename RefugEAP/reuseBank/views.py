from django.shortcuts import render
from rest_framework.decorators import api_view
from reuseBank.models import Donation
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def getdata(request):
    person = {'name' : 'Mabroor' , 'age' : 28 }
    return Response(person)


@api_view(['GET'])
def ReactReusepageview(request):
    objects = Donation.objects.all()
    data = [{'title': obj.title, 'description': obj.description, 'Created': obj.Created } for obj in objects]
    return Response({'data': data})


