from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import EmailTokenObtainPairSerializer


from .models import CustomerProfile, WorkerProfile

from .serializers import (
     CustomerRegisterSerializer,
    WorkerRegisterSerializer,
    UserSerializer,
    CustomerProfileSerializer,
    WorkerProfileSerializer
)

class CustomerRegisterView(generics.CreateAPIView):
    serializer_class = CustomerRegisterSerializer

class WorkerRegisterView(generics.CreateAPIView):
    serializer_class = WorkerRegisterSerializer

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


class EmailLoginView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer