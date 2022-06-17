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
    let scrollIntro             = $("#intro");
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
    let scrollModStruggle       = $('#learning-struggle');
    let scrollModInclusive      = $('#learning-inclusive');
    let scrollModAccess         = $('#learning-access');
    let scrollModAcademic       = $('#learning-academic');
    
    let scrollEndModStruggle    = $('#learning-struggle .scrolling-space');
    let scrollEndModInclusive   = $('#learning-inclusive .scrolling-space');
    let scrollEndModAccess      = $('#learning-access .scrolling-space');
    let scrollEndModAcademic    = $('#learning-academic .scrolling-space');

    // Heights 
    let lengthIntro             = scrollIntro.innerHeight();
    let lengthIntroContent      = scrollIntroContent.innerHeight();
    let lengthIntroImage        = scrollIntroImage.innerHeight();
    let lengthMap               = scrollMap.innerHeight();
    let lengthMapImage          = scrollMapImage.innerHeight();
    let lengthWhy               = scrollWhy.innerHeight();
    
    let lengthOffers            = scrollOffers.innerHeight();
    let lengthOffersImage       = scrollOffersImage.innerHeight();
    
    let lengthTimeline          = scrollTimeline.innerHeight();
    let lengthTimelineImage     = scrollTimelineImage.innerHeight();
    
    let lengthIndicator         = scrollIndicator.innerHeight();
    let lengthIndicatorContent  = scrollIndicatorContent.innerHeight();
    let lengthIndicatorImage    = scrollIndicatorImage.innerHeight();
    
    let lengthLearn             = scrollLearn.innerHeight();
    let lengthLearnContent      = scrollLearnContent.innerHeight();
    let lengthLearnImage        = scrollLearnImage.innerHeight();
    
    let lengthInvolved          = scrollInvolved.innerHeight();
    let lengthInvolvedContent   = scrollInvolvedContent.innerHeight();
    let lengthInvolvedImage     = scrollInvolvedImage.innerHeight();

    let lengthAcknow            = scrollAcknow.innerHeight();
    let lengthFooter            = scrollFooter.innerHeight();

    // Modules
    let lengthModStruggle       = scrollModStruggle.innerHeight();
    let lengthModInclusive      = scrollModInclusive.innerHeight();
    let lengthModAccess         = scrollModAccess.innerHeight();
    let lengthModAcademic       = scrollModAcademic.innerHeight();
    
    let lengthEndModStruggle    = scrollEndModStruggle.innerHeight();
    let lengthEndModInclusive   = scrollEndModInclusive.innerHeight();
    let lengthEndModAccess      = scrollEndModAccess.innerHeight();
    let lengthEndModAcademic    = scrollEndModAcademic.innerHeight();

    //(for section indicator)
    let lengthIntroSI = lengthIntro+lengthIntroContent+lengthIntroImage+lengthMap+lengthMapImage+lengthWhy+lengthOffers+lengthOffersImage+lengthTimeline+lengthTimelineImage;
    let lengthLearningsSI = lengthLearn+lengthLearnContent+lengthLearnImage;
    let lengthInvolvedSI = lengthInvolved+lengthInvolvedContent+lengthInvolvedImage;

    

    $(window).scroll(function() {
        //changing scroller value
        let wScroll = $(window).scrollTop();
        console.log(wScroll+" scroll position");

        // Window Position Information
        let posthIntro           = scrollIntro.offset().top;
        let posIntroContent      = scrollIntroContent.offset().top;
        let posIntroImage        = scrollIntroImage.offset().top;
        let posMap               = scrollMap.offset().top;
        let posMapImage          = scrollMapImage.offset().top;
        let posWhy               = scrollWhy.offset().top;
        let posOffers            = scrollOffers.offset().top;
        let posOffersImage       = scrollOffersImage.offset().top;
        let posTimeline          = scrollTimeline.offset().top;
        let posTimelineImage     = scrollTimelineImage.offset().top;
        let posIndicator         = scrollIndicator.offset().top;
        let posIndicatorContent  = scrollIndicatorConent.offset().top;
        let posIndicatorImage    = scrollIndicatorImage.offset().top;
        let posLearn             = scrollLearn.offset().top;
        let posLearnContent      = scrollLearnContent.offset().top;
        let posLearnImage        = scrollLearnImage.offset().top;
        let posInvolved          = scrollInvolved.offset().top;
        let posInvolvedContent   = scrollInvolvedContent.offset().top;
        let posInvolvedImage     = scrollInvolvedImage.offset().top;
        let posAcknow            = scrollAcknow.offset().top;
        let posFooter            = scrollFooter.offset().top;

        let mScrollPercent = (wScroll / (scrollHeight - windowH)) * 100;
        // console.log(mScrollPercent);

        //timeline section
    });

    scrollModStruggle.scroll(function() {
        
        // Position
        let poshModStruggle       = scrollModStruggle.offset().top;
        let posModInclusive      = scrollModInclusive.offset().top;
        let posModAccess         = scrollModAccess.offset().top;
        let posModAcademic       = scrollModAcademic.innerHeight();

        let posEndModStruggle    = scrollEndModStruggle.innerHeight();
        let posEndModInclusive   = scrollEndModInclusive.innerHeight();
        let posEndModAccess      = scrollEndModAccess.offset().top;
        let posEndModAcademic    = scrollEndModAcademic.offset().top;
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
    windowScroll();
    mapChart();
    amChart();
    animateType();
    smoothScroll();
}(jQuery));