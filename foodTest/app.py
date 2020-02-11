# import necessary libraries
import os
import psycopg2
import pygeoj


from flask import (
    Flask,
    render_template,
    jsonify,
    json, 
    current_app as app,
    request,
    redirect)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("page2.html")


@app.route("/send")
def send():

    con = psycopg2.connect(database="fooddb2", user="postgres", password="Ruhi", host="127.0.0.1", port="5432")
    #print("Database opened successfully")
    cur = con.cursor()
    

    # Count of foodcategory by foodcategoryname
    fcount=[]
    fcat=[]
    data=[]
    cur.execute("select distinct count(fcategory)as fcount,fcategory from yelpdata1 group by fcategory")
    rows = cur.fetchall()

    for row in rows:
        fcount.append(row[0])
        fcat.append(row[1])

    flen=len(fcount)    

    # Total count of restaurents
    cur.execute("select count(rname) from yelpdata1")
    row = cur.fetchone()
    #print(row[0])

    data.append(flen)
    data.append(row[0])

    # select Restaurent name,category,ratings,address,phone no from database
    cur.execute("select rname,fcategory,rating,address,phone from yelpdata1")
    rowdata = cur.fetchall()
    test=[data,rowdata]

    return render_template("index.html",test=test)

@app.route("/api/display")
def display():

    con = psycopg2.connect(database="fooddb2", user="postgres", password="Ruhi", host="127.0.0.1", port="5432")
    #print("Database opened successfully")
    cur = con.cursor()
    

    # Count of foodcategory by foodcategoryname
    rcount=[]
    rating=[]
    data=[]
    fcat=[]
    fcount=[]
    
    cur.execute("select rating,count(rname)as count from yelpdata1 group by rating")
    rows = cur.fetchall()

    for row in rows:
        rating.append(row[0])
        rcount.append(row[1])

    data={"Rating":rating,
    "Rcount":rcount}

    cur.execute("select  distinct fcategory,count(rname) from yelpdata1 group by fcategory")
    rows = cur.fetchall()

    for row in rows:
        fcat.append(row[0])
        fcount.append(row[1])

    data=[{"Rating":rating,"Rcount":rcount},{"Category":fcat,"fcount":fcount}]

    return jsonify(data)

@app.route("/map")
def map():

    return render_template("map.html")


if __name__ == "__main__":
    app.run(debug=True)