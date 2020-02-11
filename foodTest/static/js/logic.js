// Read our converted yelp GeoJson File

var url = "static/data/yelp.geojson";

  var markersA = [];
  var markersB = [];
  var markersC = [];
  var markersD = [];
// Perform a GET request from the file
d3.json(url,function(data) {
  
  
  console.log(data);
 
  console.log(data.features[172].properties.lat)

  console.log(markersA);
  //Loop through the initial array and add to two different arrays based on the specified variable
  for (var i = 0; i < data.features.length; i++) {
    if(data.features[i].properties.Rating>3.9){
      markersA.push(data.features[i].properties)
    }
    if(data.features[i].properties.Rating>=3 && data.features[i].properties.Rating<4 ){
      markersB.push(data.features[i].properties)
    }

    if(data.features[i].properties.Rating>=2 && data.features[i].properties.Rating<3 ){
      markersC.push(data.features[i].properties)
    }
    if(data.features[i].properties.Rating>=0 && data.features[i].properties.Rating<2 ){
      markersD.push(data.features[i].properties)
    }

  }
    //add the groups of markers to layerGroups
    //var groupA = L.layerGroup(markersA);
    //var groupB = L.layerGroup(markersB);
    //var groupC=L.layerGroup(markersC);
    //var groupD=L.layerGroup(markersD);
    console.log(markersD);
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);

});

  var groupA = L.layerGroup(markersA);
  var groupB = L.layerGroup(markersB);
  var groupC = L.layerGroup(markersC);
  var groupD = L.layerGroup(markersD);


function createFeatures(foodData) {
 

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the restaurant name , cateogry and rating
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.rname +
      "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
  }

  // Create a GeoJSON layer containing the features array on the restaurant Data object
  // Run the onEachFeature function once for each piece of data in the array
  var restaurants = L.geoJSON(foodData, {
    onEachFeature: onEachFeature
  });

  // Sending our restaurant layer to the createMap function
  createMap(restaurants);
}//createMap(restaurants)




function createMap(restaurants) {

  // Define streetmap and darkmap layers
  var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });
  // Define a baseMaps object to hold our base layers
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };
  
  // Create overlay object to hold our overlay layer
  var overlayMaps = {
    Restaurants: restaurants,
    Excellent:groupA,
    VeryGood:groupB,
    Bad:groupD
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      43.6532, -79.382
    ],
    zoom: 9,
    layers: [streetmap, restaurants]
  });
   const myIcon = L.icon({
    iconUrl: 'marker_icon.png',
    iconSize: [36, 45],
    iconAnchor: [15, 35]
});
//console.log(location);
   //Get Current location of user 
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

  var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
});

  // Create a layer control
  // Pass in our baseMaps and overlayMaps
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  },{icon: myIcon}).addTo(myMap);
}




function spliceData(){
  //Add filters for data

var promise=$.getJSON("yelp.geojson");
promise.then(function(data){
  var allbusiness=L.geoJson(data);
  var cafes=L.geoJson(data,{
    filter:function(feature,layer){
      return feature.properties.fcategory=="Cafe";
    },
    pointToLayer:function(feature,latlng){
      return L.marker(latlng,{
        icon:myIcon
      }).on('mouseover',function(){
        this.bindPopup(feature.properties.rname).openPopup();
      });
    }
})
var others = L.geoJson(data, {
  filter: function(feature, layer) {
      return feature.properties.BusType != "Cafe";
  },
  pointToLayer: function(feature, latlng) {
      return L.marker(latlng, {
      }).on('mouseover', function() {
          this.bindPopup(feature.properties.Name).openPopup();
      });
    }
});
map.fitBounds(allbusinesses.getBounds(), {
  padding: [50, 50]
});
});

cafes.addTo(myMap)
others.addTo(myMmap)
// The JavaScript below is new
$("#others").click(function() {
  map.addLayer(others)
  map.removeLayer(cafes)
});
$("#cafes").click(function() {
  map.addLayer(cafes)
  map.removeLayer(others)
});
$("#allbus").click(function() {
  map.addLayer(cafes)
  map.addLayer(others)
});
}

