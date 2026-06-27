from django.shortcuts import render

# Create your views here.
from django.db.models import Avg
from rest_framework.views import APIView
from rest_framework.response import Response

from accounts.models import User, WorkerProfile
from services.models import ServiceRequest

class PublicStatisticsView(APIView):

    authentication_classes = []
    permission_classes = []

    def get(self, request):

        customers = User.objects.filter(
            role="CUSTOMER"
        ).count()

        workers = WorkerProfile.objects.filter(
            is_verified=True
        ).count()

        requests = ServiceRequest.objects.count()

        completed = ServiceRequest.objects.filter(
            status="COMPLETED"
        ).count()

        return Response({

            "customers": customers,

            "workers": workers,

            "requests": requests,

            "completed": completed

        })