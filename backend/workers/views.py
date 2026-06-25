from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from services.models import ServiceRequest

from .serializers import AvailableJobSerializer


class AvailableJobsView(generics.ListAPIView):

    serializer_class = AvailableJobSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        worker = self.request.user.worker_profile

        categories = worker.skills.values_list(
            "category",
            flat=True
        )

        return (
            ServiceRequest.objects.filter(
                category_id__in=categories,
                status="PENDING"
            )
            .select_related(
                "customer",
                "category"
            )
            .order_by("-created_at")
        )