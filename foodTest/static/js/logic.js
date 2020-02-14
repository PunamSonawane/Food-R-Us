// Read our converted yelp GeoJson File

var url = './static/data/yelp.geojson'

d3.json(url,function(data) {
  
  //location=data
  console.log(data);
 

  // Once we get a response, send the data.features object to the createFeatures function
  createMap(data);

});




function createFeatures(restaurants) {
 //console.log(groupA)

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the restaurant name , category and rating
  var points = L.geoJSON(restaurants, {
    pointToLayer:function(feature, latlng){
      return L.marker(latlng,{
        title:feature.properties.rname,
        riseOnHover:true
        });
      },
      onEachFeature:function(feature,layer){   
      layer.bindPopup("<h3>" + feature.properties.rname +
      "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
        }
    });
    console.log(points);
  // Sending our restaurant layer to the createMap function
  createMap(points);
}

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
  
  var points = L.geoJSON(restaurants, {
    pointToLayer:function(feature, latlng){
      return L.marker(latlng,{
        title:feature.properties.rname,
        riseOnHover:true
        });
      },
      onEachFeature:function(feature,layer){   
      layer.bindPopup("<h3>" + feature.properties.rname +
      "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
        }
    });

  var pointsA= L.geoJSON(restaurants, {
    filter:filterA,
    pointToLayer:function(feature, latlng){
      return L.marker(latlng,{
        title:feature.properties.rname,
        riseOnHover:true
        });
      },
      onEachFeature:function(feature,layer){   
      layer.bindPopup("<h3>" + feature.properties.rname +
      "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
        }
    });

    var pointsB = L.geoJSON(restaurants, {
      filter:filterB,
      pointToLayer:function(feature, latlng){
        return L.marker(latlng,{
          title:feature.properties.rname,
          riseOnHover:true
          });
        },
        onEachFeature:function(feature,layer){   
        layer.bindPopup("<h3>" + feature.properties.rname +
        "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
          }
      });

      var pointsC = L.geoJSON(restaurants, {
        filter:filterC,
        pointToLayer:function(feature, latlng){
          return L.marker(latlng,{
            title:feature.properties.rname,
            riseOnHover:true
            });
          },
          onEachFeature:function(feature,layer){   
          layer.bindPopup("<h3>" + feature.properties.rname +
          "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
            }
        });

    
        var pointsD = L.geoJSON(restaurants, {
          filter:filterD,
          pointToLayer:function(feature, latlng){
            return L.marker(latlng,{
              title:feature.properties.rname,
              riseOnHover:true
              });
            },
            onEachFeature:function(feature,layer){   
            layer.bindPopup("<h3>" + feature.properties.rname +
            "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>");
              }
          });
          var italian=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Italian";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });
          var burger=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Burgers";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });
          var cafe=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Cafes";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var chinese=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Chinese";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });


          var pizza=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Pizza";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });
          var indian=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Indian";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var vegan=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Vegan";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var bar=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Bars";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var mexican=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Mexican";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var thai=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Thai";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var bnb=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Breakfast & Brunch";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });


          var japanese=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Japanese";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var sushi=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Sushi Bars";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });


          var salad=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Salad";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var cuban=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Cuban";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var comfortfood=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Comfort Food";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var korean=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Korean";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var ramen=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Ramen";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var french=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="French";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });

          var greek=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Greek";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });
          var arcade=L.geoJson(restaurants,{
            filter:function(feature,layer){
              return feature.properties.fcategory=="Arcades";
            },
            pointToLayer:function(feature,latlng){
              return L.marker(latlng,{
                
              }).on('mouseover',function(){
                this.bindPopup("<h3>" + feature.properties.rname +
                "</h3><hr><p>" + feature.properties.fcategory + "</p>"+"<p>"+feature.properties.Rating+"</p>").openPopup();
              });
            }
          });
 
         
//console.log(markersC);
  // Create our map, giving it the streetmap and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      43.6532, -79.382
    ],
    zoom: 9,
    layers: [streetmap]
  });
   const myIcon = L.icon({
    iconUrl: '../../static/css/assets/images/marker_icon.png',
    iconSize: [36, 45],
    iconAnchor: [15, 35]
});

//add markers based on rating filters
points.addTo(myMap);
pointsA.addTo(myMap);
pointsB.addTo(myMap);
pointsC.addTo(myMap);
pointsD.addTo(myMap);
//add markers based on category types
burger.addTo(myMap);
italian.addTo(myMap);
cafe.addTo(myMap);
pizza.addTo(myMap);
vegan.addTo(myMap);
bar.addTo(myMap);
indian.addTo(myMap);
mexican.addTo(myMap);
thai.addTo(myMap);
bnb.addTo(myMap);
japanese.addTo(myMap);
sushi.addTo(myMap);
salad.addTo(myMap);
cuban.addTo(myMap);
comfortfood.addTo(myMap);
korean.addTo(myMap);
ramen.addTo(myMap);
french.addTo(myMap);
greek.addTo(myMap);
arcade.addTo(myMap);
 // Define a baseMaps object to hold our base layers
 var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};
//console.log(markersD);
// Create overlay object to hold our overlay layer
var overlayMaps = {
  "All Restaurants": points,
  "Excellent":pointsA,
  "Very Good":pointsB,
  "Good":pointsC,
  "Worth a shot":pointsD
};


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

  $("#italians").click(function() {
    myMap.eachLayer(function (layer) {
      myMap.removeLayer(layer);
      myMap.addLayer(streetmap);
      navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
        var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
      });

  });
    myMap.addLayer(italian);
  });

  $("#burgers").click(function() {
    myMap.eachLayer(function (layer) {
      myMap.removeLayer(layer);
      myMap.addLayer(streetmap);
      navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
        var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
      });

  });
    myMap.addLayer(burger);
  });

  $("#cafes").click(function() {
    myMap.eachLayer(function (layer) {
      myMap.removeLayer(layer);
      myMap.addLayer(streetmap);
      navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
        var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
      });

  });
    myMap.addLayer(cafe);
  });


  $("#italians").click(function() {
    myMap.eachLayer(function (layer) {
      myMap.removeLayer(layer);
      myMap.addLayer(streetmap);
      navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
        var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
      });

  });
    myMap.addLayer(italian);
  });

  $("#chineses").click(function() {
    myMap.eachLayer(function (layer) {
      myMap.removeLayer(layer);
      myMap.addLayer(streetmap);
      navigator.geolocation.getCurrentPosition(function(location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      
        var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
      });

  });
    myMap.addLayer(chinese);
})
$("#pizzas").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(pizza);
})

$("#vegans").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(vegan);
})

$("#bars").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(bar);
})

$("#indians").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(indian);
})

$("#mexicans").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(mexican);
})

$("#thais").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(thai);
})

$("#bnbs").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(bnb);
})

$("#japaneses").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(japanese);
})

$("#sushis").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(sushi);
})
$("#salads").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(salads);
})

$("#cubans").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(cuban);
})

$("#comforts").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(comfortfood);
})

$("#koreans").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(korean);
})

$("#ramens").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(ramen);
})

$("#frenchs").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(french);
})
$("#greeks").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });

});
  myMap.addLayer(greek);
})

$("#arcades").click(function() {
  myMap.eachLayer(function (layer) {
    myMap.removeLayer(layer);
    myMap.addLayer(streetmap);
    navigator.geolocation.getCurrentPosition(function(location) {
      var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    
      var geomarker = L.marker((latlng), {icon: myIcon}).addTo(myMap);
    });
});
myMap.addLayer(arcade);
})

};


//filter functions for 

function filterA(feature){
if(feature.properties.Rating>=4.5)
return true
}
function filterB(feature){
  if(feature.properties.Rating>=3.5 && feature.properties.Rating<4.5)
  return true
}
function filterC(feature){
  if(feature.properties.Rating>=2 && feature.properties.Rating<3.5)
  return true
}
function filterD(feature){
  if(feature.properties.Rating<2)
  return true
}