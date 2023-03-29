from django.contrib import admin
from django.contrib import admin
from .models import Donation
# Register your models here.


class ReuseBankAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

# Register your models here.

admin.site.register(Donation, ReuseBankAdmin)