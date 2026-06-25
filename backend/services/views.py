from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import (
    ServiceCategory,
    ServiceRequest
)

from .serializers import (
    ServiceCategorySerializer,
    ServiceRequestSerializer
)


class ServiceCategoryListView(
    generics.ListAPIView
):

    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer


class ServiceRequestCreateView(
    generics.CreateAPIView
):

    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(customer=self.request.user)