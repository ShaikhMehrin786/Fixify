from django.urls import path

from .views import PublicStatisticsView

urlpatterns = [

    path(
        "statistics/",
        PublicStatisticsView.as_view()
    ),

]