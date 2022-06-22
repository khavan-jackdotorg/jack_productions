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
    let endTrans = 0.15;
    let startTrans = 0.75;

    // Objects
    let sectionIndicator = $(".sectionindicator");

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
        let scrollTimeOne       = $("#time-one");
        let scrollTimeTwo       = $("#time-two");
        let scrollTimeThree     = $("#time-three");
        let scrollTimeFour      = $("#time-four");
        let scrollTimeFive      = $("#time-five");

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
        let lengthtimeone       = scrollTimeOne.innerHeight();
        let lengthtimetwo       = scrollTimeTwo.innerHeight();
        let lengthtimethree     = scrollTimeThree.innerHeight();
        let lengthtimefour      = scrollTimeFour.innerHeight();
        let lengthtimefive      = scrollTimeFive.innerHeight();
    
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
    let lengthIntroSI = lengthIntro+lengthIntroContent+lengthIntroImage+lengthMap+lengthMapImage+lengthWhy+lengthOffers+lengthOffersImage+lengthTimeline+lengthTimelineImage+lengthIndicator+lengthIndicatorContent+lengthIndicatorImage;
    let lengthLearningsSI = lengthLearn+lengthLearnContent+lengthLearnImage;
    let lengthInvolvedSI = lengthInvolved+lengthInvolvedContent+lengthInvolvedImage;
    

    $(window).scroll(function() {
        //changing scroller value
        var wScroll = $(window).scrollTop();
        // CHECK console.log(wScroll + " scroll position");

        // Window Position Information
        let posIntro           = scrollIntro.offset().top;
        let posIntroContent      = scrollIntroContent.offset().top;
        let posIntroImage        = scrollIntroImage.offset().top;
        let posMap               = scrollMap.offset().top;
        let posMapImage          = scrollMapImage.offset().top;
        let posWhy               = scrollWhy.offset().top;
        let posOffers            = scrollOffers.offset().top;
        let posOffersImage       = scrollOffersImage.offset().top;
        let posTimeline          = scrollTimeline.offset().top;
        let posTimelineImage     = scrollTimelineImage.offset().top;
            let postimeone       = scrollTimeOne.innerHeight();
            let postimetwo       = scrollTimeTwo.innerHeight();
            let postimethree     = scrollTimeThree.innerHeight();
            let postimefour      = scrollTimeFour.innerHeight();
            let postimefive      = scrollTimeFive.offset().top;
        let posIndicator         = scrollIndicator.offset().top;
        let posIndicatorContent  = scrollIndicatorContent.offset().top;
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
        
        // Section indicator
        if (wScroll > 0 && wScroll < posIntro){
            // console.log("blank header section");
            sectionIndicator.html(" ");
        } else if (wScroll >= posIntro - windowH*startTrans && wScroll < posIndicatorImage - windowH*startTrans) {
            // console.log(posIntro + "Intro");
            sectionIndicator.html("Introduction");
        } else if (wScroll >= posIndicatorImage - windowH*startTrans && wScroll < posInvolved  - windowH*startTrans) {
            // console.log(posLearn + "Learn");
            sectionIndicator.html("Learning");
        } else if (wScroll >= posInvolved - windowH*startTrans && wScroll < posAcknow - windowH*startTrans) {
            // console.log(posInvolved + "Involved");
            sectionIndicator.html("Get Involved");
        } else if (wScroll >= posAcknow - windowH*startTrans ) {
            // console.log(posAcknow + "Acknow");
            sectionIndicator.html("Acknowledge");
        } else {
            // console.log("blank header section");
            sectionIndicator.html(" ");
        }

        //timeline section
        if (wScroll >= postimeone - windowH*startTrans && wScroll < postimetwo - windowH*startTrans ) {
            centerScreen = lengthtimeone - (wScroll - postimeone);
            // half the length of the time on minus the scroll position starting at timeone
            var marginOne = (wScroll - postimeone) / lengthtimeone * 100; //scroll position vs
            // percentage posTimeOne
            var screenSection = 0.5;
            var margin = 4;
            // 50% of the screen should be the marker at when the element appears

            scrollTimeOne.css("margin-left", margin );

        } else if (wScroll >= postimetwo - windowH*startTrans && wScroll < postimethree - windowH*startTrans) {

        } else if (wScroll >= postimethree - windowH*startTrans && wScroll < postimefour - windowH*startTrans) {

        } else if (wScroll >= postimefour - windowH*startTrans && wScroll < postimefive - windowH*startTrans) {

        } else if (wScroll >= postimefive - windowH*startTrans && wScroll < postimefive + lengthtimefive - windowH*startTrans) {

        } else {

        }

        //indicator section

    });

    scrollModStruggle.scroll(function() {
        
        // Position
        let poshModStruggle      = scrollModStruggle.offset().top;
        let posModInclusive      = scrollModInclusive.offset().top;
        let posModAccess         = scrollModAccess.offset().top;
        let posModAcademic       = scrollModAcademic.offset().top;

        let posEndModStruggle    = scrollEndModStruggle.offset().top;
        let posEndModInclusive   = scrollEndModInclusive.offset().top;
        let posEndModAccess      = scrollEndModAccess.offset().top;
        let posEndModAcademic    = scrollEndModAcademic.offset().top;

        //learning section
    });

}
function navLink() {
    let navHam = $(".nav-hamburger");
    let navLink = $(".nav-link");
    let navClose = $(".cat-navmenu-item .close-button");
    let navMenu = $(".cat-navmenu-pop");
    navHam.click(function(){
        navMenu.addClass("opened");
        console.log("open-menu")
    });
    navLink.click(function(){
        navMenu.removeClass("opened");
        console.log("close-menu")
    })
    navClose.click(function(){
        navMenu.removeClass("opened");
        console.log("close-menu")
    })


}

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
}
function mapChart() {
    let mapContainer = $("#map");

}
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
function animateType() {
    let animateChar = $(".animatechar");
    let animateWord = $(".animateword");
    animateChar.lettering();
    animateWord.lettering('words');
}

(function($) {
    windowScroll();
    mapChart();
    amChart();
    animateType();
    navLink();
    smoothScroll();
    $(window).on('resize', function(){
        windowScroll();
    });
}(jQuery));