from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('pledge', 'Pledge'),
        ('active_member', 'Active Member'),
        ('pm', 'Pledge Manager'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='pledge')
    # Add other fields as needed

    def __str__(self):
        return self.username
