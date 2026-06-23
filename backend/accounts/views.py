from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .serializers import (
    RegisterSerializer,
    UserProfileSerializer
)


class RegisterView(generics.CreateAPIView):

    serializer_class = RegisterSerializer


class ProfileView(generics.RetrieveAPIView):

    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user