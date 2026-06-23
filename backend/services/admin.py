# services/admin.py

from django.contrib import admin
from .models import ServiceCategory

admin.site.register(ServiceCategory)