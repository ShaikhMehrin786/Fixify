from rest_framework import serializers

from .models import Review


class ReviewSerializer(serializers.ModelSerializer):

    customer_name = serializers.CharField(
        source="customer.username",
        read_only=True
    )

    worker_name = serializers.CharField(
        source="worker.user.username",
        read_only=True
    )

    class Meta:

        model = Review

        fields = [

            "id",

            "service_request",

            "customer_name",

            "worker_name",

            "rating",

            "comment",

            "created_at"

        ]

        read_only_fields = [

            "customer_name",

            "worker_name",

            "created_at"

        ]

    def validate(self, attrs):

        request = self.context["request"]

        service_request = attrs["service_request"]

        if service_request.customer != request.user:

            raise serializers.ValidationError(
                "You can review only your own service."
            )

        if service_request.status != "COMPLETED":

            raise serializers.ValidationError(
                "Review can be added only after service completion."
            )

        if Review.objects.filter(
            service_request=service_request
        ).exists():

            raise serializers.ValidationError(
                "Review already exists."
            )

        return attrs