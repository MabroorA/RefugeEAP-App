# Generated by Django 4.0.2 on 2023-03-14 17:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reuseBank', '0003_donation_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='donation',
            name='Created',
        ),
    ]