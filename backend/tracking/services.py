from django.db import transaction
from django.utils import timezone

from services.models import ServiceRequest
from .models import WorkerAssignment, WorkerLocation


class AssignmentService:

    @staticmethod
    @transaction.atomic
    def accept_job(worker, request_id):

        service_request = (
            ServiceRequest.objects
            .select_for_update()
            .get(
                id=request_id,
                status="PENDING"
            )
        )

        assignment = WorkerAssignment.objects.create(
            worker=worker,
            request=service_request,
            status="ACCEPTED",
            accepted_at=timezone.now()
        )

        service_request.status = "ACCEPTED"
        service_request.save()

        return assignment
    
class LocationService:

    @staticmethod
    def update_location(worker_profile, data):

        location, created = WorkerLocation.objects.update_or_create(
            worker=worker_profile,
            defaults={
                "latitude": data["latitude"],
                "longitude": data["longitude"],
                "speed": data.get("speed", 0),
                "heading": data.get("heading", 0),
            }
        )

        return location
    
class JobStatusService:

    @staticmethod
    def update_status(service_request, assignment, new_status):

        assignment.status = new_status
        service_request.status = new_status

        if new_status == "ON_THE_WAY":
            assignment.started_at = timezone.now()

        elif new_status == "ARRIVED":
            assignment.arrived_at = timezone.now()

        elif new_status == "COMPLETED":
            assignment.completed_at = timezone.now()

        assignment.save()
        service_request.save()

        return assignment