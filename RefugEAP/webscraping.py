from bs4 import BeautifulSoup as bs
import requests
import csv
from datetime import datetime, timedelta

# Still figuring out how to get client's data so I am extracting some irrelevant data to help set up interface first
url = "https://www.eventbrite.co.uk/d/united-kingdom--city-of-leicester/all-events/"
r = requests.get(url)
webpage = bs(r.content)
print(webpage.prettify())

# Locate the events
ul = webpage.find("ul", attrs={"class": "search-main-content__events-list"})

# Get the names of the events
name_list = ul.select("li div.eds-event-card-content__primary-content div.eds-is-hidden-accessible")
names = [name.get_text() for name in name_list]

# Get the links
link_list = ul.select("li div.eds-event-card-content__primary-content a")
links = [link["href"] for link in link_list]

# Get the date and time
date_time_list = ul.select("li div.eds-event-card-content__primary-content div.eds-event-card-content__sub-title")
details = [detail.get_text() for detail in date_time_list]

# Separate date and time
date = []
time = []
for detail in details:

    detail_list = detail.split(',')
    if len(detail_list) <= 1:
        next_day = datetime.now() + timedelta(1)
        date.append(next_day.strftime('%Y-%m-%d'))
        time.append('18:00')
    else:
        detail_list[2] = detail_list[2][:6]
        # Remove space in every string in the list
        new_detail_list = [d.strip() for d in detail_list]

        # the 2nd element in the list is the time
        time.append(new_detail_list[2])
        new_detail_list.remove(new_detail_list[2])

        # 0 and 1st elements are i.e. "Tue", "Feb 27"
        new_detail_list = ' '.join(new_detail_list)
        date_list = new_detail_list + " 2023"

        # Change the date format
        new_date = datetime.strptime(date_list, '%a %b %d %Y')
        new_date_string = new_date.strftime('%Y-%m-%d')
        date.append(new_date_string)

# Create column name | names, date, time, links
column_names = ['Name', 'Date', 'Time', 'More']

# Write data to csv file
filename = 'events.csv'
with open(filename, 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(column_names)
    for i in range(len(names)):
        row = [names[i], date[i], time[i], links[i]]
        writer.writerow(row)

'''
Need to set it up as a scheduled task 
to run automatically at specified intervals
'''