from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from core.models import CoreModel


# Create your models here.


class Top(CoreModel):
    name = models.TextField()
    location = models.TextField()
    peak = models.IntegerField()

    def __str__(self):
        return f'{self.name}-{self.location}'


class Ascent(CoreModel):
    top = models.ForeignKey(to=Top, on_delete=models.CASCADE)
    climber = models.ForeignKey(to=User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.climber.username}-{self.top.name}-{self.created_at}'
