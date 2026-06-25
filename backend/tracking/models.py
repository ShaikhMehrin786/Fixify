from django.db import models
from django.conf import settings
from services.models import ServiceRequest
import random

def generate_otp():
    return str(random.randint(100000, 999999))

class AssignmentStatus(models.TextChoices):
    ASSIGNED = "ASSIGNED", "Assigned"
    ACCEPTED = "ACCEPTED", "Accepted"
    ON_THE_WAY = "ON_THE_WAY", "On The Way"
    ARRIVED = "ARRIVED", "Arrived"
    IN_PROGRESS = "IN_PROGRESS", "In Progress"
    COMPLETED = "COMPLETED", "Completed"
    CANCELLED = "CANCELLED", "Cancelled"


class WorkerAssignment(models.Model):

    request = models.OneToOneField(
        ServiceRequest,
        on_delete=models.CASCADE,
        related_name="assignment"
    )

    worker = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="assigned_jobs"
    )

    status = models.CharField(
        max_length=20,
        choices=AssignmentStatus.choices,
        default=AssignmentStatus.ASSIGNED
    )

    assigned_at = models.DateTimeField(auto_now_add=True)

    accepted_at = models.DateTimeField(
        null=True,
        blank=True
    )

    arrived_at = models.DateTimeField(
        null=True,
        blank=True
    )

    completed_at = models.DateTimeField(
        null=True,
        blank=True
    )

    estimated_arrival_minutes = models.PositiveIntegerField(
        null=True,
        blank=True
    )

    start_otp = models.CharField(
        max_length=6,
        default=generate_otp
    )

    completion_otp = models.CharField(
        max_length=6,
        default=generate_otp
    )

    class Meta:
        ordering = ["-assigned_at"]

    def __str__(self):
        return f"{self.worker.username} -> {self.request.title}"