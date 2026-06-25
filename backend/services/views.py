from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import (
    ServiceCategory,
    ServiceRequest
)

from .serializers import (
    RequestImageUploadSerializer,
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

class MyServiceRequestListView(generics.ListAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ServiceRequest.objects.filter(
            customer=self.request.user
        ).order_by("-created_at")

class ServiceRequestDetailView(generics.RetrieveAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ServiceRequest.objects.filter(
            customer=self.request.user
        )

class RequestImageUploadView(generics.CreateAPIView):

    serializer_class = RequestImageUploadSerializer
    permission_classes = [IsAuthenticated]