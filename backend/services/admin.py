from django.contrib import admin
from .models import (
    ServiceCategory,
    ServiceRequest,
    RequestImage
)


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "created_at"
    )

    search_fields = ("name",)


@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "customer",
        "category",
        "title",
        "priority",
        "status",
        "created_at"
    )

    list_filter = (
        "status",
        "priority",
        "category"
    )

    search_fields = (
        "title",
        "customer__username"
    )


@admin.register(RequestImage)
class RequestImageAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "request",
        "uploaded_at"
    )