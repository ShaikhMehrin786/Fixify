from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import (
    RegisterView,
    ProfileView,
    CustomerProfileView,
    WorkerProfileView,
)

urlpatterns = [

    path(
        "register/",
        RegisterView.as_view(),
        name="register"
    ),

    path(
        "login/",
        TokenObtainPairView.as_view(),
        name="login"
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