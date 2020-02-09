console.log("i am in js page")
function buildPlot() {
    /* data route */
  var url = "/api/display";
  d3.json(url).then((gdata)=> {
    console.log(gdata[0]["Rcount"]);

    window.optionChanged=function(){
      
      var e = document.getElementById("select").value
      console.log(e)
      //Plot the Pie chart 
      if(e=='ratings')
      {
      var data = [{
        values: gdata[0]["Rcount"],
        labels: gdata[0]["Rating"],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
        Plotly.newPlot("graph", data, layout);
    }else if(e=='category'){
      var trace2 = {
        x: gdata[1]["category"],
        y: gdata[1]["fcount"],
        text:gdata[1]["category"],
        mode: 'markers',
        marker: {
          size:gdata[1]["fcount"],
          color:gdata[1]["category"],
          type:"bubble"              
        }
        };
      
        var data = [trace2];
      
        var layout = {
          xaxis: { title: 'OTU ID' },
          showlegend: false,
          
          yaxis: {
            autorange: true}
        };
        Plotly.newPlot("graph", data, layout);

    }
    }

  })
}

buildPlot();