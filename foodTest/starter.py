# Dependencies
import json
import os,requests
import pymongo
import pandas as pd
from sqlalchemy import create_engine,inspect, func
import psycopg2

# set the query paramiter
term = 'Restaurants '
location = 'Toronto'
SEARCH_LIMIT = 50

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

# Get the response
response = requests.get(url, headers=headers, params=url_params)

print(response)
print(type(response.text))
print(response.text[:1500])

# Declare variables
Resto_name=[]
Food_category=[]
Resto_rating=[]
Lat=[]
Long=[]
Address=[]
City=[]
Phone=[]

# Loop through the Url and fetch the data

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
    phn=business["display_phone"]
    Phone.append(phn)

# extracting the data into dictionary
food_dict = {'rname': Resto_name, 
             'fcategory': Food_category,
             'Rating': Resto_rating,
             'lat': Lat,
             'long': Long,
             'address':Address,
             'city': City,
             'phon': Phone
             }

# Creating the dataframe
yelp_df = pd.DataFrame(food_dict)

# Connecting to the Database in Postgresssql
connection_string = "postgres:Ruhi@localhost:5432/fooddb2"
engine = create_engine(f'postgresql+psycopg2://{connection_string}')

# To check the tables in database
#engine.table_names()
inspector = inspect(engine)
inspector.get_table_names()

# Transfering the datatable in database
yelp_df.to_sql(name='yelpdata1', con=engine, if_exists='append', index=True)