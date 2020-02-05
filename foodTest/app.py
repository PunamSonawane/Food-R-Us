# Dependencies
import json
import os,requests
import pandas as pd


term = 'Restaurants '
location = 'Toronto'
SEARCH_LIMIT = 20

# Load JSON
url = 'https://api.yelp.com/v3/businesses/search'

headers = {
        'Authorization': 'Bearer {}'.format("tjoCWV1N7vncjx7yQkbRj8sa_V35ENjRSgetql-asev5rmOrqCjQEjVISjMN191l5KbOvmJfHz2u6Y-ch8agkzJ-46qeM8R2lMfrqZoLBTk02d4zHSi8QkhY9rY4XnYx"),
    }

url_params = {
                'term': term.replace(' ', '+'),
                'location': location.replace(' ', '+'),
                'limit': SEARCH_LIMIT
            }

response = requests.get(url, headers=headers, params=url_params)

print(response)
print(type(response.text))
print(response.text[:1500])

Resto_name=[]
Food_category=[]
Resto_rating=[]
Lat=[]
Long=[]
Address=[]
City=[]
Country=[]
Phone=[]

for business in response.json()["businesses"]:
    name=business["name"]
    Resto_name.append(name)
    catg=business["categories"][0]["title"]
    Food_category.append(catg)
    rating=business["rating"]
    Resto_rating.append(rating)
    lat=business["coordinates"]["latitude"]
    Lat.append(lat)
    long=business["coordinates"]["longitude"]
    Long.append(long)
    addr=business["location"]["display_address"][0]
    Address.append(addr)
    city=business["location"]["city"]
    City.append(city)
    cout=business["location"]["country"]
    Country.append
    phn=business["display_phone"]
    Phone.append(phn)

