from rest_framework import generics

from .models import WorkerSkill
from .serializers import WorkerSkillSerializer


class WorkerSkillListCreateView(
    generics.ListCreateAPIView
):

    queryset = WorkerSkill.objects.all()
    serializer_class = WorkerSkillSerializer