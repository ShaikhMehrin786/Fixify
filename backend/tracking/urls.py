from django.urls import path

from .views import AcceptJobView

urlpatterns = [

    path(
        "accept/<int:pk>/",
        AcceptJobView.as_view(),
        name="accept_job"
    ),
]