from rest_framework import serializers

from services.models import ServiceRequest


class AvailableJobSerializer(serializers.ModelSerializer):

    customer_name = serializers.CharField(
        source="customer.username",
        read_only=True
    )

    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    class Meta:
        model = ServiceRequest

        fields = [
            "id",
            "title",
            "description",
            "customer_name",
            "category_name",
            "priority",
            "service_address",
            "latitude",
            "longitude",
            "preferred_date",
            "preferred_time",
            "status",
            "created_at",
        ]