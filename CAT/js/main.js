// Objects
var Cursor = $('#cursor');
var map = $('.map');
var hover = $('.hover');
var link = $('a');
var scroller = $('.scroller');

function windowScroll() {
    // Main Body and Window Height
    let scrollHeight = $("body").innerHeight(); //the total height of the page that will scroll
    let windowH = $(window).innerHeight(); //the total height of the visible window

    //Scroll Container Sections
    let scrollTimeline =$('.scroll.timeline-container');

    $(window).scroll(function() {
        //changing scroller value
        let wScroll = $(window).scrollTop();
    });

};
function amChart() {
    // https://www.amcharts.com/
    am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
    am5themes_Animated.new(root)
    ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX"
    }));


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "zoomX"
    }));
    cursor.lineY.set("visible", false);

    var date = new Date();
    date.setHours(0, 0, 0, 0);
    var value = 100;

    function generateData() {
    value = Math.round((Math.random() * 10 - 5) + value);
    am5.time.add(date, "day", 1);
    return {
        date: date.getTime(),
        value: value
    };
    }

    function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
        data.push(generateData());
    }
    return data;
    }


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0,
    baseInterval: {
        timeUnit: "day",
        count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
    })
    }));

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
    }));

    var data = generateDatas(50);
    series.data.setAll(data);


    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    }); // end am5.ready()
};
function mapChart() {
    let mapContainer = $("#map");
};
function smoothScroll() {

};
function animateType() {
    let animateChar = $(".animatechar");
    let animateWord = $(".animateword");
    animateChar.lettering();
    animateWord.lettering('words');
};

(function($) {
    mapChart();
    animateType();
}(jQuery));