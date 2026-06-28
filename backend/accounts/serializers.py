from rest_framework import serializers
from django.contrib.auth import authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from services.models import ServiceCategory
from .models import (
    User,
    CustomerProfile,
    WorkerProfile
)
class CustomerRegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
        write_only=True,
        min_length=8
    )

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "phone",
            "password"
        ]

    def validate_phone(self, value):

        if not value.isdigit():
            raise serializers.ValidationError(
                "Phone number must contain only digits."
            )

        if len(value) != 10:
            raise serializers.ValidationError(
                "Phone number must contain exactly 10 digits."
            )

        return value

    def create(self, validated_data):

        password = validated_data.pop("password")

        user = User(
            **validated_data,
            role="CUSTOMER"
        )

        user.set_password(password)
        user.save()

        return user
    
from rest_framework import serializers
from .models import User, WorkerProfile

class WorkerRegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    aadhaar = serializers.CharField(write_only=True)
    profession = serializers.CharField(write_only=True)
    category = serializers.PrimaryKeyRelatedField(
        queryset=ServiceCategory.objects.all(),
        write_only=True
    )
    experience = serializers.IntegerField(write_only=True)
    address = serializers.CharField(write_only=True)
    city = serializers.CharField(write_only=True)

    profile_image = serializers.ImageField(required=False)
    verification_document = serializers.FileField(required=False)

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "phone",
            "password",
            "confirm_password",
            "profile_image",
            "profession",
            "category",
            "experience",
            "address",
            "city",
            "aadhaar",
            "verification_document",
        ]

    def validate(self, attrs):

        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {"confirm_password": "Passwords do not match"}
            )

        return attrs

    def create(self, validated_data):

        validated_data.pop("confirm_password")

        profession = validated_data.pop("profession")
        category = validated_data.pop("category")
        experience = validated_data.pop("experience")
        address = validated_data.pop("address")
        city = validated_data.pop("city")

        aadhaar = validated_data.pop("aadhaar")
        verification_document = validated_data.pop(
            "verification_document",
            None
        )

        profile_image = validated_data.pop(
            "profile_image",
            None
        )

        password = validated_data.pop("password")

        user = User(
            role="WORKER",
            **validated_data
        )

        user.set_password(password)
        user.profile_image = profile_image
        user.save()

        worker = user.worker_profile

        worker.experience_years = experience
        worker.aadhaar_number = aadhaar
        worker.current_address = address
        worker.verification_document = verification_document

        worker.profession = profession
        worker.city = city
        worker.category = category

        worker.save()

        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "phone",
            "role",
            "profile_image"
        ]

class CustomerProfileSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = CustomerProfile
        fields = "__all__"

class WorkerProfileSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = WorkerProfile
        fields = "__all__"




class EmailTokenObtainPairSerializer(TokenObtainPairSerializer):

    username_field = "email"

    def validate(self, attrs):

        email = attrs.get("email")
        password = attrs.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password.")

        user = authenticate(
            username=user.username,
            password=password
        )

        if user is None:
            raise serializers.ValidationError("Invalid email or password.")

        refresh = self.get_token(user)

        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "role": user.role,
            }
        }