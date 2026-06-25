from django.db import models


class ServiceCategory(models.Model):

    name = models.CharField(
        max_length=100,
        unique=True
    )

    description = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name
    
from django.conf import settings


class ServiceRequest(models.Model):

    STATUS_CHOICES = [
        ("PENDING", "Pending"),
        ("ACCEPTED", "Accepted"),
        ("ON_THE_WAY", "On The Way"),
        ("ARRIVED", "Arrived"),
        ("IN_PROGRESS", "In Progress"),
        ("COMPLETED", "Completed"),
        ("CANCELLED", "Cancelled"),
    ]

    PRIORITY_CHOICES = [
        ("NORMAL", "Normal"),
        ("URGENT", "Urgent"),
        ("EMERGENCY", "Emergency"),
    ]

    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="service_requests"
    )

    category = models.ForeignKey(
        ServiceCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    title = models.CharField(max_length=200)

    description = models.TextField()

    service_address = models.TextField()

    latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True
    )

    longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True
    )

    preferred_date = models.DateField()

    preferred_time = models.TimeField()

    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES,
        default="NORMAL"
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="PENDING"
    )

    ai_predicted_category = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    estimated_cost = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    estimated_duration = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Minutes"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f"{self.customer.username} - {self.title}"