from rest_framework import serializers

from .models import WorkerAssignment, WorkerLocation


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

class WorkerLocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = WorkerLocation
        fields = "__all__"
        read_only_fields = ("worker", "last_updated")

    
class JobStatusSerializer(serializers.Serializer):

    status = serializers.ChoiceField(
        choices=[
            "ON_THE_WAY",
            "ARRIVED",
            "IN_PROGRESS",
            "COMPLETED"
        ]
    )