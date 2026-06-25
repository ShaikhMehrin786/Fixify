from rest_framework import serializers

from .models import (
    ServiceCategory,
    ServiceRequest,
    RequestImage
)


class ServiceCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ServiceCategory
        fields = "__all__"


class RequestImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = RequestImage
        fields = "__all__"


class ServiceRequestSerializer(serializers.ModelSerializer):

    customer_name = serializers.CharField(
        source="customer.username",
        read_only=True
    )

    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    images = RequestImageSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = ServiceRequest

        read_only_fields = (
            "customer",
            "status",
            "created_at",
            "updated_at",
            "estimated_cost",
            "estimated_duration",
            "ai_predicted_category",
        )

        fields = [
            "id",
            "customer",
            "customer_name",
            "category",
            "category_name",
            "title",
            "description",
            "service_address",
            "latitude",
            "longitude",
            "preferred_date",
            "preferred_time",
            "priority",
            "status",
            "estimated_cost",
            "estimated_duration",
            "ai_predicted_category",
            "images",
            "created_at",
            "updated_at",
        ]

class RequestImageUploadSerializer(serializers.ModelSerializer):

    class Meta:
        model = RequestImage
        fields = [
            "id",
            "request",
            "image"
        ]