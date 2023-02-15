import csv
from django.core.management.base import BaseCommand
from models import Event

# Import data from a csv file
class Command(BaseCommand):
    help = 'Import data from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str)

    def handle(self, *args, **kwargs):
        csv_file = kwargs['csv_file']
        with open(csv_file, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                my_model, created = Event.objects.get_or_create(name=row['name'], date=row['time'],time=row['time'], more=row['more'])
                if created:
                    my_model.save()
command = Command()
command.handle()