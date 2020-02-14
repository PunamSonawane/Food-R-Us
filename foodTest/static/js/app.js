//console.log("i am in js page")
function buildPlot() {
  /* data route */
var url = "/api/display";
d3.json(url).then((gdata)=> {

  window.optionChanged=function(){
    
    var e = document.getElementById("select").value
    
    //Plot the Pie chart 
    if(e=='ratings')
    {
      
      var data = [{
          values: gdata[0]["Rcount"],
          labels: gdata[0]["Rating"],
          domain: {column: 0},
          name: 'Ratings',
          hoverinfo: 'label+percent+name',
          hole: .4,
          type: 'pie'
        }]
        var layout = {
          title: 'Restaurants by Ratings',
          annotations: 
            {
              font: {
                size: 20
              },
              showarrow: false,
              text: '',
              x: 0.17,
              y: 0.5
            },
            height: 400,
            width: 500,
            showlegend: true,             
          };
          
          Plotly.newPlot('graph', data,layout);
          
  }
  else if(e=='category')
  {

    var data = [
      {
        x:gdata[1]["Category"],
        y: gdata[1]["fcount"],
        type: 'bar'
      }
    ];      
      var layout = {
          
          title: 'Count of Restaurants by food category',
          height: 500,
          width: 600,
          showlegend: false,          
      };
      Plotly.newPlot("graph", data, layout);
  }
  else if(e=='Top')
  {
    var data = [
      {
        x:gdata[2]["Name"],
        y: gdata[2]["Rating"],
        type: 'bar',
        marker: {color : ['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844']},

      }
    ];      
      var layout = {
        colorway : ['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844'],
          title: 'Best Restaurants in Toronto',
          height: 500,
          width: 600,
          showlegend: false,          
      };
      Plotly.newPlot("graph", data, layout);

  }
  else if(e=='ctop')
  {
    var data = [
      {
        x:gdata[3]["fcategory"],
        y: gdata[3]["count"],
        type: 'bar',
        marker: {color : ['#f3cec9', '#e7a4b6', '#cd7eaf', '#a262a9', '#6f4d96', '#3d3b72', '#182844']},

      }
    ];      
      var layout = {
        
          title: 'Top 10 Food Category',
          height: 500,
          width: 600,
          showlegend: false,          
      };
      Plotly.newPlot("graph", data, layout);

  }
  else if(e=='low')
  {
    var data = [
      {
        x:gdata[4]["Name"],
        y: gdata[4]["Rating"],
        type: 'bar',
        marker: {color : ['red', '#e7a4b6', 'yellow', '#a262a9', 'green', '#3d3b72']},

      }
    ];      
      var layout = {
        
          title: 'Worst Restaurants in Toronto',
          height: 500,
          width: 600,
          showlegend: false,          
      };
      Plotly.newPlot("graph", data, layout);

  }
  }

})
}

buildPlot();