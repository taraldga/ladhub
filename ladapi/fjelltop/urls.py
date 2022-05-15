from django.urls import include, path
from rest_framework import routers
from .views import TopViewSet, AscentViewSet

router = routers.DefaultRouter()
router.register(r'tops', TopViewSet)
router.register(r'ascents', AscentViewSet)


urlpatterns = [
    path('', include(router.urls))
]