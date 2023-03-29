from django.db import models

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=150)
    date = models.DateField()
    time = models.CharField(max_length=20)
    more = models.TextField()
    link = models.URLField(null=True)

    def __str__(self):
        return self.name

