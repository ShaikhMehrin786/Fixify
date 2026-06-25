from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import ServiceCategory,ServiceRequest

from .serializers import RequestImageUploadSerializer,ServiceCategorySerializer,ServiceRequestSerializer

from workers.services import WorkerMatchingService  

import logging

logger = logging.getLogger(__name__)

class ServiceCategoryListView(
    generics.ListAPIView
):

    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer


class ServiceRequestCreateView(generics.CreateAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):

        request = serializer.save(
            customer=self.request.user
        )

        matching_workers = WorkerMatchingService.get_matching_workers(
            request.category
        )

        logger.info(
            "Found %s matching workers.",
            matching_workers.count()
        )
    
class MyServiceRequestListView(generics.ListAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            ServiceRequest.objects
            .filter(customer=self.request.user)
            .select_related(
                "category",
                "customer"
            )
            .prefetch_related(
                "images"
            )
            .order_by("-created_at")
        )

class ServiceRequestDetailView(generics.RetrieveAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            ServiceRequest.objects
            .filter(customer=self.request.user)
            .select_related(
                "category",
                "customer"
            )
            .prefetch_related(
                "images"
            )
        )

class RequestImageUploadView(generics.CreateAPIView):

    serializer_class = RequestImageUploadSerializer
    permission_classes = [IsAuthenticated]