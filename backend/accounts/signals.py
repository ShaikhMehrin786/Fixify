from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import User, CustomerProfile, WorkerProfile


@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):

    if created:

        if instance.role == "CUSTOMER":
            CustomerProfile.objects.create(user=instance)

        elif instance.role == "WORKER":
            WorkerProfile.objects.create(user=instance)