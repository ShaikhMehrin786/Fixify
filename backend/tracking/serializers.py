from rest_framework import serializers

from .models import WorkerAssignment


class WorkerAssignmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkerAssignment
        fields = "__all__"
        read_only_fields = (
            "assigned_at",
            "accepted_at",
            "completed_at",
            "start_otp",
            "completion_otp",
        )