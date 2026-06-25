from rest_framework import serializers
from .models import WorkerSkill


class WorkerSkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkerSkill
        fields = '__all__'