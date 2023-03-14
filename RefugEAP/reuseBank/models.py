from django.db import models

# Create your models here.
class Donation(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    Created = models.DateTimeField(auto_now_add=True)

    def _str_(self):
        return self.title