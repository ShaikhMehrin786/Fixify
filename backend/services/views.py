from core.permissions import IsWorker
from rest_framework.views import APIView
from rest_framework.response import Response
from core.permissions import IsCustomer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import ServiceCategory,ServiceRequest
from .serializers import RequestImageUploadSerializer,ServiceCategorySerializer,ServiceRequestSerializer
from workers.services import WorkerMatchingService  
from .serializers import WorkerLocationSerializer
from .services import LocationService
import logging

logger = logging.getLogger(__name__)

class ServiceCategoryListView(
    generics.ListAPIView
):

    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer


class ServiceRequestCreateView(generics.CreateAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [
        IsAuthenticated,
        IsCustomer
    ]
    def perform_create(self, serializer):

        request = serializer.save(
            customer=self.request.user
        )

        matching_workers = WorkerMatchingService.get_matching_workers(
            request.category
        )

        logger.info(
            "Request %s matched with %s workers",
            request.id,
            matching_workers.count()
        )
    
class MyServiceRequestListView(generics.ListAPIView):

    serializer_class = ServiceRequestSerializer
    permission_classes = [
        IsAuthenticated,
        IsCustomer
    ]

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
    permission_classes = [
        IsAuthenticated,
        IsCustomer
    ]

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
    permission_classes = [
        IsAuthenticated,
        IsCustomer
    ]

class UpdateLocationView(APIView):

    permission_classes = [
        IsAuthenticated,
        IsWorker
    ]

    def post(self, request):

        serializer = WorkerLocationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        location = LocationService.update_location(
            request.user.worker_profile,
            serializer.validated_data
        )

        return Response(
            WorkerLocationSerializer(location).data
        )