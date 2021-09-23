$('.gauge-arrow').cmGauge();


// circle progress start
let progrssCircle = (area, value)=>{
  $(area).circleProgress({
    max: 100,
    value: value,
    textFormat: 'percent',
  });
};

progrssCircle('.progress-circle.warning', 40)
progrssCircle('.progress-circle.success', 60)
progrssCircle('.progress-circle.danger', 10)
// circle progress end


// tolltip start
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// tolltip end



// donought chart start

let donoughtChart = (chartArea)=>{
  am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create(chartArea, am4charts.PieChart);
    
    // Add data
    chart.data = [ {
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czechia",
      "litres": 301.9
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }, {
      "country": "The Netherlands",
      "litres": 50
    } ];
    
    // Set inner radius
    chart.innerRadius = am4core.percent(40);
    
    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 0;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()
    am4core.addLicense("ch-custom-attribution");
}

donoughtChart("doughnut-chart-1");
donoughtChart("doughnut-chart-2");
  // donought chart end