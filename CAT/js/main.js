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

    // Sections
    let scrollIntro = $("#intro")
    let scrollIntroContent      = $('#intro-content');
    let scrollIntroImage        = $('#intro-image');
    let scrollMap               = $('#map');
    let scrollMapImage          = $('#map-image');
    let scrollWhy               = $('#why');
    let scrollOffers            = $('#offers');
    let scrollOffersImage       = $('#offers-image');
    let scrollTimeline          = $('#timeline');
    let scrollTimelineImage     = $('#timeline-image');
    let scrollIndicator         = $('#indicator');
    let scrollIndicatorContent  = $('#indicator-content');
    let scrollIndicatorImage    = $('#indicator-image');
    let scrollLearn             = $('#learning');
    let scrollLearnContent      = $('#learning-content');
    let scrollLearnImage        = $('#learning-image');
    let scrollInvolved          = $('#involved');
    let scrollInvolvedContent   = $('#involved-content');
    let scrollInvolvedImage     = $('#involved-image');
    let scrollAcknow            = $('#acknowledge');
    let scrollFooter            = $('.footer');
    
    // Modules
    let scrollModuleStruggle    = $('#learning-struggle');
    let scrollModuleInclusive   = $('#learning-inclusive');
    let scrollModuleAccess      = $('#learning-access');
    let scrollModuleAcademic    = $('#learning-academic');



    // Heights
    let LengthIntro = scrollIntro.innerHeight()+scrollIntroContent.innerHeight()+scrollIntroImage;

    $(window).scroll(function() {
        //changing scroller value
        let wScroll = $(window).scrollTop();
        console.log(wScroll+" scroll position");
    });

};
function amChart() {
    // https://www.amcharts.com/
    am5.ready(function() {
        var root = am5.Root.new("chartdiv01");
        
        var chart = root.container.children.push(
            am5xy.XYChart.new(root, {})
        );

        var xAxis = chart.xAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererX.new(root, {})
            })
        );

        var yAxis = chart.yAxes.push(
            am5xy.CategoryAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
                categoryField: "causes"
            })
        );
        am5.net.load("/data/mydata.json").then(function(result) {
            console.log(result.response);
            series.data.setAll(am5.CSVParser.parse(result.response));
        }).catch(function(result){
            console.log("Error loading " + result.xhr.responseURL);
        });

    }); // end am5.ready()
};
function mapChart() {
    let mapContainer = $("#map");
};
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
function animateType() {
    let animateChar = $(".animatechar");
    let animateWord = $(".animateword");
    animateChar.lettering();
    animateWord.lettering('words');
};

(function($) {
    mapChart();
    amChart();
    animateType();
    smoothScroll();
}(jQuery));