from core.serializers import UserSerializer
from .models import Top, Ascent
from rest_framework import serializers
from rest_framework import permissions


class TopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Top
        fields = ['name', 'location', 'peak']


class AscentSerializer(serializers.ModelSerializer):
    top = TopSerializer()
    climber = UserSerializer()



    class Meta:
        model = Ascent
        fields = ['top', 'climber']
