from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Review
from .serializers import ReviewSerializer


class ReviewListView(generics.ListAPIView):

    serializer_class = ReviewSerializer

    queryset = (
        Review.objects
        .select_related(
            "customer",
            "worker__user",
            "service_request"
        )
    )


class ReviewCreateView(generics.CreateAPIView):

    serializer_class = ReviewSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def perform_create(self, serializer):

        service_request = serializer.validated_data[
            "service_request"
        ]

        assignment = service_request.assignment

        serializer.save(

            customer=self.request.user,

            worker=assignment.worker

        )