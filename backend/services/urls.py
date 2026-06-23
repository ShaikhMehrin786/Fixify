from django.urls import path
from .views import ServiceCategoryListView

urlpatterns = [
    path(
        'categories/',
        ServiceCategoryListView.as_view(),
        name='service_categories'
    ),
]