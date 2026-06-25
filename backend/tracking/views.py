from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .services import AssignmentService


class AcceptJobView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request, pk):

        try:
            assignment = AssignmentService.accept_job(
                request.user,
                pk
            )

            return Response(
                {
                    "message": "Job accepted successfully.",
                    "assignment_id": assignment.id,
                    "start_otp": assignment.start_otp
                }
            )

        except Exception:
            return Response(
                {
                    "message": "Job is no longer available."
                },
                status=status.HTTP_400_BAD_REQUEST
            )