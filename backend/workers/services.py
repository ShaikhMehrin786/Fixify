from .models import WorkerSkill


class WorkerMatchingService:

    @staticmethod
    def get_matching_workers(category):

        return (
            WorkerSkill.objects
            .filter(
                category=category,
                is_active=True,
                worker__status="ONLINE",
                worker__is_available=True,
                worker__is_verified=True
            )
            .select_related(
                "worker",
                "worker__user"
            )
        )