from django.db import models
from accounts.models import WorkerProfile

class RequestStatus(models.TextChoices):
    PENDING = "PENDING", "Pending"

    ACCEPTED = "ACCEPTED", "Accepted"

    ON_THE_WAY = "ON_THE_WAY", "On The Way"

    ARRIVED = "ARRIVED", "Arrived"

    IN_PROGRESS = "IN_PROGRESS", "In Progress"

    COMPLETED = "COMPLETED", "Completed"

    CANCELLED = "CANCELLED", "Cancelled"
    
class ServiceCategory(models.Model):

    name = models.CharField(
        max_length=100,
        unique=True
    )

    description = models.TextField(
        blank=True,
        null=True
    )
 
    icon = models.CharField(
        max_length=50,
        default="tools"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name
    
from django.conf import settings


class ServiceRequest(models.Model):
    class Meta:
        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["priority"]),
            models.Index(fields=["preferred_date"]),
            models.Index(fields=["customer"]),
        ]

    class RequestStatus(models.TextChoices):
        PENDING = "PENDING", "Pending"
        ACCEPTED = "ACCEPTED", "Accepted"
        ON_THE_WAY = "ON_THE_WAY", "On The Way"
        ARRIVED = "ARRIVED", "Arrived"
        IN_PROGRESS = "IN_PROGRESS", "In Progress"
        COMPLETED = "COMPLETED", "Completed"
        CANCELLED = "CANCELLED", "Cancelled"

    class RequestPriority(models.TextChoices):
        NORMAL = "NORMAL", "Normal"
        URGENT = "URGENT", "Urgent"
        EMERGENCY = "EMERGENCY", "Emergency"
    
    customer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="service_requests"
    )

    category = models.ForeignKey(
        ServiceCategory,
        on_delete=models.SET_NULL,
        related_name="requests",
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
        choices=RequestPriority.choices,
        default=RequestPriority.NORMAL
    )

    status = models.CharField(
        max_length=20,
        choices=RequestStatus.choices,
        default=RequestStatus.PENDING
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

    ai_confidence = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        null=True,
        blank=True
    )
    
    estimated_arrival = models.DateTimeField(
        null=True,
        blank=True
    )

    cancellation_reason = models.TextField(
        blank=True,
        null=True
    )
    assigned_worker = models.ForeignKey(
    WorkerProfile,
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name="assigned_requests"
)

    def __str__(self):
        return f"{self.customer.username} - {self.title}"
   
    
class RequestImage(models.Model):

    request = models.ForeignKey(
        ServiceRequest,
        on_delete=models.CASCADE,
        related_name="images"
    )

    image = models.ImageField(
        upload_to="service_requests/"
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"Image for Request #{self.request.id}"