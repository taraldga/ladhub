from django.shortcuts import render
from rest_framework import viewsets
from .models import Top, Ascent
from .serializers import TopSerializer, AscentSerializer
# Create your views here.

class TopViewSet(viewsets.ModelViewSet):
    queryset = Top.objects.all()
    serializer_class = TopSerializer


class AscentViewSet(viewsets.ModelViewSet):
    queryset = Ascent.objects.all()
    serializer_class = AscentSerializer