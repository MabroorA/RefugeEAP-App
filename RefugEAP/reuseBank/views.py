from django.shortcuts import render
from rest_framework.decorators import api_view
from reuseBank.models import Donation
from rest_framework.response import Response
from .serializer import DonationSerializer
# Create your views here.

@api_view(['GET'])
def getdata(request):
    person = {'name' : 'Mabroor' , 'age' : 28 }
    return Response(person)


@api_view(['GET'])
def getDonations(request):
    donations = Donation.objects.all()
    serializer = DonationSerializer(donations,many=True)
    # data = [{'title': obj.title, 'description': obj.description, 'Created': obj.Created } for obj in objects]
    # return Response({'data': data})
    return Response(serializer.data)


# @api_view(['GET'])
# def updateDonation(request, pk):
#     data = request.data
#     note = Donation.objects.get(id=pk)
#     serializer = DonationSerializer(instance=note, data=data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)