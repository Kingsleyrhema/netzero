from django.db import models

class Detail(models.Model):
    email = models.CharField(max_length=50)
    passwords = models.CharField(max_length=50)
    def __str__(self) -> str:
        return f'Email: {self.email}\n Password: {self.passwords}'
# Create your models here.
