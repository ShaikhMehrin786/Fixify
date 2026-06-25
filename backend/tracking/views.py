from django.utils import timezone

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from services.models import ServiceRequest
from .models import WorkerAssignment

class AcceptJobView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request, pk):

        worker = request.user

        try:
            service_request = ServiceRequest.objects.get(
                pk=pk,
                status="PENDING"
            )

        except ServiceRequest.DoesNotExist:

            return Response(
                {
                    "message":
                    "Request already accepted."
                },
                status=status.HTTP_404_NOT_FOUND
            )

        assignment = WorkerAssignment.objects.create(

            worker=worker,

            request=service_request,

            status="ACCEPTED",

            accepted_at=timezone.now()

        )

        service_request.status = "ACCEPTED"

        service_request.save()

        return Response(
            {
                "message":
                "Job accepted successfully.",

                "assignment_id":
                assignment.id,

                "start_otp":
                assignment.start_otp
            }
        )