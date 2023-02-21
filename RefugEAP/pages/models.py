from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=150)
    date = models.DateField()
    time = models.CharField(max_length=10)
    more = models.URLField()

    def __str__(self):
        return self.name