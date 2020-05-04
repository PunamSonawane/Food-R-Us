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

### Feature Description

**Home page:** User will find the links for the restaurants catlog, map, and reservation on Home Page. And user will find the reviews from customer on home page.
  ![Home1](/img/home1.PNG)
  <br>
  ![Home2](/img/home2.PNG)
  <br>
  ![Home3](/img/home.PNG)
  <br>
**Restaurants catlog:** User will find list of all the restaurants details and visualization which gives analytical view to the user to select restaurants by top food category, top restauants by ratings etc.
  ![Restaurants catlog](/img/resto_catlog.PNG)
  <br>

* Restaurants by Cuisine Bar chart
  ![Restaurants catlog](/img/v1.PNG)
  <br>

* Best Restaurants in Toronto Bar chart
  ![Restaurants catlog](/img/v2.PNG)
  <br>

* Best Restaurants by Cuisine Bar chart
  ![Restaurants catlog](/img/v3.PNG)
  <br>

**Map:** Map shows Restaurants by Cuisine and Ratings
  ![Map](/img/map.PNG)
  <br>

**Reservation Finder:** User can make Reservations with this form.
  ![Reservation](/img/rsv.PNG)
  <br>


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
