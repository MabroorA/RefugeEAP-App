import csv
from django.core.management.base import BaseCommand
from pages.models import Event

# Import data from a csv file
class Command(BaseCommand):
    help = 'Import data from a CSV file'

    def handle(self, *args, **options):
        csv_file = options['events.csv']
        with open(csv_file, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                my_model, created = Event.objects.get_or_create(name=row['name'], date=row['time'],time=row['time'], more=row['more'])
                if created:
                    my_model.save()
command = Command()
command.handle()