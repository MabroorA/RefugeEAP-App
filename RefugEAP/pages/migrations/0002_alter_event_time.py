# Generated by Django 4.0.2 on 2023-02-19 21:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='time',
            field=models.CharField(max_length=10),
        ),
    ]
