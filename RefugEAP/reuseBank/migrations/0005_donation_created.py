# Generated by Django 4.0.2 on 2023-03-22 16:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('reuseBank', '0004_remove_donation_created'),
    ]

    operations = [
        migrations.AddField(
            model_name='donation',
            name='Created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
