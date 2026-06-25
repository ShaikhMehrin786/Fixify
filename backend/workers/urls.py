from django.urls import path

from .views import AvailableJobsView

urlpatterns = [

    path(
        "available-jobs/",
        AvailableJobsView.as_view(),
        name="available_jobs"
    ),
]