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

}
function amChart() {
    // https://www.amcharts.com/

}
function mapChart() {
    let mapContainer = $("#map");
};

(function($) {
    mapChart();

}(jQuery));