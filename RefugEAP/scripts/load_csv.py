import csv
from pages.models import Event

def run():
    with open('./events.csv') as file:
        reader = csv.reader(file)
        next(reader)
        for row in reader:
            print(row)
            my_model, created = Event.objects.get_or_create(name=row[0], date=row[1],time=row[2], more=row[3])
            if created:
                my_model.save()
