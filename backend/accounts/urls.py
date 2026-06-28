from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import (
    CustomerRegisterView,
    WorkerRegisterView,
    ProfileView,
    CustomerProfileView,
    WorkerProfileView,EmailLoginView
)

urlpatterns = [

    path(
        "register/customer/",
        CustomerRegisterView.as_view(),
        name="customer-register",
    ),
    path(
        "register/worker/",
        WorkerRegisterView.as_view(),
        name="worker-register",
    ),

    path(
        "login/",
        EmailLoginView.as_view(),
        name="login",
    ),

    path(
        "token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh"
    ),

    path(
        "profile/",
        ProfileView.as_view(),
        name="profile"
    ),

    path(
        "customer/profile/",
        CustomerProfileView.as_view(),
        name="customer_profile"
    ),

    path(
        "worker/profile/",
        WorkerProfileView.as_view(),
        name="worker_profile"
    ),
]