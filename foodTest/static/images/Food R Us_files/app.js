//console.log("i am in js page")
function buildPlot() {
    /* data route */
  var url = "/api/display";
  d3.json(url).then((gdata)=> {
    //console.log(gdata[0]["Rcount"]);

    window.optionChanged=function(){
      
      var e = document.getElementById("select").value
      
      //Plot the Pie chart 
      if(e=='ratings')
      {
      /*var data = [{
        values: gdata[0]["Rcount"],
        labels: gdata[0]["Rating"],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
        Plotly.newPlot("graph", data, layout);*/


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
              
              //grid: {rows: 1, columns: 2}
            };
            
            Plotly.newPlot('graph', data, layout);
            
    }else if(e=='category'){
      var trace2 = {
        x: gdata[1]["Category"],
        y: gdata[1]["fcount"],
        text:gdata[1]["Category"],
        mode: 'markers+text',
        marker: {
          size:gdata[1]["fcount"],
          color:'rgb(255, 65, 54)',
            
          type:"bubble"              
        }
        };
      
        var data = [trace2];
      
        var layout = {
            xaxis: {
                showticklabels: false,
                },
            title: 'Count of Restaurants by food category',
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