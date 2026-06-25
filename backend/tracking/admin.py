from django.contrib import admin
from .models import WorkerAssignment


@admin.register(WorkerAssignment)
class WorkerAssignmentAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "worker",
        "request",
        "status",
        "assigned_at",
    )

    list_filter = (
        "status",
    )

    search_fields = (
        "worker__username",
        "request__title",
    )