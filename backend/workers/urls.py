from django.urls import path
from .views import WorkerSkillListCreateView

urlpatterns = [
    path(
        'skills/',
        WorkerSkillListCreateView.as_view(),
        name='worker_skills'
    ),
]