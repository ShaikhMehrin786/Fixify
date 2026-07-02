from django.contrib.auth.models import AbstractUser
from django.db import models
from .managers import UserManager

class User(AbstractUser):

    objects = UserManager()

    ROLE_CHOICES = (
        ('CUSTOMER', 'Customer'),
        ('WORKER', 'Worker'),
        ('ADMIN', 'Admin'),
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='CUSTOMER'
    )

    phone = models.CharField(
    max_length=15,
    unique=True
    )

    email = models.EmailField(
    unique=True
    )

    profile_image = models.ImageField(
        upload_to='profiles/',
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.username
    
class CustomerProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="customer_profile"
    )   

    address = models.TextField(
        blank=True,
        null=True
    )

    city = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    state = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    def __str__(self):
        return self.user.username

class WorkerStatus(models.TextChoices):
    ONLINE = "ONLINE", "Online"
    OFFLINE = "OFFLINE", "Offline"
    BUSY = "BUSY", "Busy"

class WorkerProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="worker_profile"
    )

    profession = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    category = models.ForeignKey(
        "services.ServiceCategory",
        on_delete=models.SET_NULL,
        null=True,
        related_name="workers"
    )

    experience_years = models.PositiveIntegerField(default=0)

    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        default=0.00
    )

    total_jobs = models.PositiveIntegerField(default=0)

    is_verified = models.BooleanField(
        default=False
    )

    is_available = models.BooleanField(
        default=True
    )

    aadhaar_number = models.CharField(
        max_length=12,
        unique=True
    )

    verification_document = models.FileField(
        upload_to="documents/",
        blank=True,
        null=True
    )

    service_radius = models.PositiveIntegerField(
        default=10,
        help_text="Radius in KM"
    )

    status = models.CharField(
        max_length=10,
        choices=WorkerStatus.choices,
        default=WorkerStatus.OFFLINE
    )

    current_latitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True
    )

    current_longitude = models.DecimalField(
        max_digits=9,
        decimal_places=6,
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)
    
    updated_at = models.DateTimeField(auto_now=True)
    
    bio = models.TextField(
        blank=True,
        null=True
    )

    current_address = models.TextField(
        blank=True,
        null=True
    )

    city = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )
    
    class Meta:
        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["is_verified"]),
            models.Index(fields=["is_available"]),
            models.Index(fields=["category"])
        ]

    def __str__(self):
        return self.user.username
