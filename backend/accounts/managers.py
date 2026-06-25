from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):

    def create_user(
        self,
        username,
        email,
        phone,
        password=None,
        **extra_fields
    ):

        if not email:
            raise ValueError("Email is required")

        if not phone:
            raise ValueError("Phone number is required")

        email = self.normalize_email(email)

        user = self.model(
            username=username,
            email=email,
            phone=phone,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)

        return user


    def create_superuser(
        self,
        username,
        email,
        phone,
        password=None,
        **extra_fields
    ):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("role", "ADMIN")

        return self.create_user(
            username,
            email,
            phone,
            password,
            **extra_fields
        )