from django.db import models
from accounts.models import WorkerProfile
from services.models import ServiceCategory


class WorkerSkill(models.Model):

    worker = models.ForeignKey(
        WorkerProfile,
        on_delete=models.CASCADE,
        related_name='skills'
    )

    category = models.ForeignKey(
        ServiceCategory,
        on_delete=models.CASCADE
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.worker.user.username} - {self.category.name}"