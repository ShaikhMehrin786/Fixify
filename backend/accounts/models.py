from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

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
        on_delete=models.CASCADE
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

class WorkerProfile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    experience_years = models.IntegerField(
        default=0
    )

    rating = models.DecimalField(
        max_digits=3,
        decimal_places=2,
        default=0
    )

    total_jobs = models.IntegerField(
        default=0
    )

    is_verified = models.BooleanField(
        default=False
    )

    is_available = models.BooleanField(
        default=True
    )

    aadhaar_number = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )

    document_url = models.TextField(
        blank=True,
        null=True
    )

    def __str__(self):
        return self.user.username