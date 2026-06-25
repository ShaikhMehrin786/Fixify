from django.urls import path
from .views import MyServiceRequestListView, RequestImageUploadView, ServiceCategoryListView,ServiceRequestCreateView, ServiceRequestDetailView, UpdateLocationView

urlpatterns = [

    path(
        "categories/",
        ServiceCategoryListView.as_view(),
        name="categories"
    ),

    path(
        "requests/",
        ServiceRequestCreateView.as_view(),
        name="create_request"
    ),
    
    path(
    "requests/my/",
    MyServiceRequestListView.as_view(),
    name="my_requests"
    ),

    path(
        "requests/<int:pk>/",
        ServiceRequestDetailView.as_view(),
        name="request_detail"
    ),

    path(
        "request-images/",
        RequestImageUploadView.as_view(),
        name="request_image_upload"
    ),

    path(
        "location/update/",
        UpdateLocationView.as_view(),
        name="update_location"
    ),
]