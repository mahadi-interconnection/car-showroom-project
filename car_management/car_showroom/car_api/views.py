# from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .serializers import CarSerializer,ShowroomSerializer, CarSerializerBasic
from .models import Car,ShowRoom


class CarCreateView(generics.ListCreateAPIView):
    queryset = Car.objects.select_related('showroom')
    # serializer_class = CarSerializer

    
    def get_serializer_class(self, *args, **kwargs):
        # return CarSerializer
        if self.request.method == 'GET':
            return CarSerializer
        return CarSerializerBasic

        
        # print(self.request.method)

    #extra
    # def get_queryset(self):
    #     return Car.objects.all().select_related('showroom')

    def perform_create(self, serializer):
        serializer.save()

class ShowroomCreateView(generics.ListCreateAPIView):
    queryset = ShowRoom.objects.all()
    serializer_class = ShowroomSerializer

    def perform_create(self, serializer):
        serializer.save()        

class CarDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.select_related('showroom')
    serializer_class = CarSerializer
    
    #extra
    # def get_queryset(self):
    #     return Car.objects.all()



class ShowroomDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ShowRoom.objects.all()
    serializer_class = ShowroomSerializer   

    def __str__(self):
        return self.name 
