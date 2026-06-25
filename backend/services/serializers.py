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

    images = RequestImageSerializer(
        many=True,
        read_only=True
    )

    class Meta:

        model = ServiceRequest

        fields = "__all__"