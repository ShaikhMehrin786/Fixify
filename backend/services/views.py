from rest_framework import generics

from .models import ServiceCategory
from .serializers import ServiceCategorySerializer


class ServiceCategoryListView(
    generics.ListCreateAPIView
):

    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer