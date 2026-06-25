from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import CustomerProfile, WorkerProfile

from .serializers import (
    RegisterSerializer,
    UserSerializer,
    CustomerProfileSerializer,
    WorkerProfileSerializer
)

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

class ProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user

class CustomerProfileView(generics.RetrieveUpdateAPIView):

    serializer_class = CustomerProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.customer_profile

class WorkerProfileView(generics.RetrieveUpdateAPIView):

    serializer_class = WorkerProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user.worker_profile