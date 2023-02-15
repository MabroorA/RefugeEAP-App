from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import ReuseBank

class ReuseBankAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

# Register your models here.

admin.site.register(ReuseBank, ReuseBankAdmin)