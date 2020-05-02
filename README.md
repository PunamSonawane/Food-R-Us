# Food R US (Full stack project Flask,Python,Postgresql,HTML,CSS,JavaScript)

This is full stack project uses Flask,Python,Postgresql,HTML,CSS,JavaScript,D3.js to make app 'Food R US' which allows customer to choose the best Restaurants within Toronto by food category,Ratings,location and
 visualize restaurants data by analysis which we made Restaurants by Ratings, Restaurants by food category, Best Restaurants in Toronto, Top Restaurants by famous cuisines, and worst Restaurants.
This Application allows us to check the Restaurants on Map and with diffrent categories and allows to make Reservation to the favorite Restaurants.


* [Background](#background)
* [File Structure](#file)
* [Running](#run)
* [Technologies Used](#technologies)

##  <a name="background"></a>Background
 For this project dataset is collected from yelp fusion API in JSON format and tranfered the data in Postgresql. Flask 'a light weight framework' to make a API 'Application Process Interface'
to make request to the server to get the data from the database and send the response to the front end. app.py is the python application file which makes routs to direct the response to the user.
Created a visualizations and Maps using the JavaScripts, D3, Leaflet. 
 
* Restaurants by Ratings Pie chart

* Restaurants by Cuisine Bar chart

* Best Restaurants in Toronto Bar chart

* Best Restaurants by Cuisine Bar chart

* Worst Restaurants by Ratings Bar chart

* Map shows Restaurants by Cuisine and Ratings

## <a name="file"></a>File Structure

Food'R'Us Folder
* app.py (python file which has routs to direct diffrent pages)
* templets Folder
	* page2.html
	* index.html
	* map.html
	* form.html
* static Folder
	* css Folder
		* style.css
	* js Folder
		* app.js
		* logic.js
		* config.js
	* data Folder
		* yelp.geojson


##  <a name="Run"></a>Running the project
python app.py Runs this project on localhost:5000

##  <a name="technologies"></a>Technologies Used

* Python
* Postgresql
* leaflet
* Javascript 
* HTML\CSS
* D3 library
