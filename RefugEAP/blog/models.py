from django.db import models
from django.contrib.auth.models import User

STATUS = (
    (0, "Draft"),
    (1, "Publish")
)

class Post(models.Model):
    title = models.CharField(max_length=150, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.CharField(max_length=150, unique=True)
    published_date = models.DateTimeField(auto_now= True)
    last_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

