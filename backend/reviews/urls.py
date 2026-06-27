from django.urls import path

from .views import (
    ReviewCreateView,
    ReviewListView
)

urlpatterns = [

    path(
        "",
        ReviewListView.as_view(),
        name="reviews"
    ),

    path(
        "create/",
        ReviewCreateView.as_view(),
        name="create_review"
    ),

]