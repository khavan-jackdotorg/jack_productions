// #
let startTrans = 0.75;
let body = $("body");
var scrollHeight = $("body").innerHeight(); //the total height of the page that will scroll
var windowH = $(window).innerHeight(); //the total height of the visible window

// Sections
let scrollIntro = $("#intro");
let scrollIntroContent = $('#intro-content');
let scrollIntroImage = $('#intro-image');
let scrollMap = $('#map');
let scrollMapImage = $('#map-image');
let scrollWhy = $('#why');
let scrollOffers = $('#offers');
let scrollOffersImage = $('#offers-image');
let scrollTimeline = $('#timeline');
let scrollTimelineImage = $('#timeline-image');
let scrollTimeOne = $("#time-one");
let scrollTimeTwo = $("#time-two");
let scrollTimeThree = $("#time-three");
let scrollTimeFour = $("#time-four");
let scrollTimeFive = $("#time-five");
let animTimeOne = $("#time-one .project-timeline");
let animTimeTwo = $("#time-two .project-timeline");
let animTimeThree = $("#time-three .project-timeline");
let animTimeFour = $("#time-four .project-timeline");
let animTimeFive = $("#time-five .project-timeline");
let scrollIndicator = $('#indicator');
let scrollIndicatorContent = $('#indicator-content');
let scrollIndicatorImage = $('#indicator-image');
let scrollLearn = $('#learning');
let scrollLearnContent = $('#learning-content');
let scrollLearnImage = $('#learning-image');
let scrollInvolved = $('#involved');
let scrollInvolvedContent = $('#involved-content');
let scrollInvolvedImage = $('#involved-image');
let scrollAcknow = $('#acknowledge');
let scrollFooter = $('.footer');

// Objects
var Cursor = $('#cursor');
let closeButt = $(".close-button");
let sectionIndicator = $(".sectionindicator");
let loader = $(".cat-loader");

// navigation
let navHam = $(".nav-hamburger");
let navLinkItem = $(".nav-link");
let navClose = $(".cat-navmenu-item .close-button");
let navMenu = $(".cat-navmenu-pop");

// map
let chapter = $(".cat-chapter-button");
let mapArea = $(".cat-sec-container.map");
let bishopButton = $("#chapter-bishop");
let camosunButton = $("#chapter-camosun");
let dalhousieButton = $("#chapter-dalhousie");
let lakeheadButton = $("#chapter-lakehead");
let tmuButton = $("#chapter-tmu");
let trentButton = $("#chapter-trent");
let guelphButton = $("#chapter-guelph");
let brunButton = $("#chapter-brunswick");
let torontoButton = $("#chapter-toronto");
let windsorButton = $("#chapter-windsor");

let mapDot = $(".map-dot");
let bishopDot = $(".map-dot.bishop");
let camosunDot = $(".map-dot.camosun");
let dalhousieDot = $(".map-dot.dalhousie");
let lakeheadDot = $(".map-dot.lakehead");
let tmuDot = $(".map-dot.tmu");
let trentDot = $(".map-dot.trent");
let guelphDot = $(".map-dot.guelph");
let brunDot = $(".map-dot.brunswick");
let torontoDot = $(".map-dot.toronto");
let windsorDot = $(".map-dot.windsor");

let catMap = $(".cat-map-object");
let mapPosition = $(".map-positioning-cont");

//module
let learnTile = $(".learning-tile");
let struggleTile = $(".learning-tile.struggle");
let inclusiveTile = $(".learning-tile.inclusivity");
let accessTile = $(".learning-tile.access");
let academicTile = $(".learning-tile.academic");

let learnMod = $(".cat-learning-module");
let moduleClose = $(".cat-learning-module .close-button.mod-close");

let scrollModStruggle = $('#learning-struggle');
let scrollModInclusive = $('#learning-inclusive');
let scrollModAccess = $('#learning-access');
let scrollModAcademic = $('#learning-academic');

let scrollEndModStruggle = $('#learning-struggle .scrolling-space');
let scrollEndModInclusive = $('#learning-inclusive .scrolling-space');
let scrollEndModAccess = $('#learning-access .scrolling-space');
let scrollEndModAcademic = $('#learning-academic .scrolling-space');

let scrollBackModStruggle = $('#learning-struggle .close-button.back');
let scrollBackModInclusive = $('#learning-inclusive .close-button.back');
let scrollBackModAccess = $('#learning-access .close-button.back');
let scrollBackModAcademic = $('#learning-academic .close-button.back');

// Heights 
let lengthIntro = scrollIntro.innerHeight();
let lengthIntroContent = scrollIntroContent.innerHeight();
let lengthIntroImage = scrollIntroImage.innerHeight();
let lengthMap = scrollMap.innerHeight();
let lengthMapImage = scrollMapImage.innerHeight();
let lengthWhy = scrollWhy.innerHeight();

let lengthOffers = scrollOffers.innerHeight();
let lengthOffersImage = scrollOffersImage.innerHeight();

let lengthTimeline = scrollTimeline.innerHeight();
let lengthTimelineImage = scrollTimelineImage.innerHeight();
let lengthtimeone = scrollTimeOne.innerHeight();
let lengthtimetwo = scrollTimeTwo.innerHeight();
let lengthtimethree = scrollTimeThree.innerHeight();
let lengthtimefour = scrollTimeFour.innerHeight();
let lengthtimefive = scrollTimeFive.innerHeight();

let lengthIndicator = scrollIndicator.innerHeight();
let lengthIndicatorContent = scrollIndicatorContent.innerHeight();
let lengthIndicatorImage = scrollIndicatorImage.innerHeight();

let lengthLearn = scrollLearn.innerHeight();
let lengthLearnContent = scrollLearnContent.innerHeight();
let lengthLearnImage = scrollLearnImage.innerHeight();

let lengthInvolved = scrollInvolved.innerHeight();
let lengthInvolvedContent = scrollInvolvedContent.innerHeight();
let lengthInvolvedImage = scrollInvolvedImage.innerHeight();

let lengthAcknow = scrollAcknow.innerHeight();
let lengthFooter = scrollFooter.innerHeight();

//(for section indicator)
let lengthIntroSI = lengthIntro + lengthIntroContent + lengthIntroImage + lengthMap + lengthMapImage + lengthWhy + lengthOffers + lengthOffersImage + lengthTimeline + lengthTimelineImage + lengthIndicator + lengthIndicatorContent + lengthIndicatorImage;
let lengthLearningsSI = lengthLearn + lengthLearnContent + lengthLearnImage;
let lengthInvolvedSI = lengthInvolved + lengthInvolvedContent + lengthInvolvedImage;

function windowScroll() {
    
        //changing scroller value
        var wScroll = $(window).scrollTop();
        // CHECK console.log(wScroll + " scroll position");

        // Window Position Information
        let posIntro = scrollIntro.offset().top;
        // let posIntroContent = scrollIntroContent.offset().top;
        // let posIntroImage = scrollIntroImage.offset().top;
        // let posMap = scrollMap.offset().top;
        // let posMapImage = scrollMapImage.offset().top;
        // let posWhy = scrollWhy.offset().top;
        // let posOffers = scrollOffers.offset().top;
        // let posOffersImage = scrollOffersImage.offset().top;
        let posTimeline = scrollTimeline.offset().top;
        // let posTimelineImage = scrollTimelineImage.offset().top;
        let postimeone = scrollTimeOne.offset().top;
        let postimetwo = scrollTimeTwo.offset().top;
        let postimethree = scrollTimeThree.offset().top;
        let postimefour = scrollTimeFour.offset().top;
        let postimefive = scrollTimeFive.offset().top;
        // let posIndicator = scrollIndicator.offset().top;
        // let posIndicatorContent = scrollIndicatorContent.offset().top;
        let posIndicatorImage = scrollIndicatorImage.offset().top;
        // let posLearn = scrollLearn.offset().top;
        // let posLearnContent = scrollLearnContent.offset().top;
        // let posLearnImage = scrollLearnImage.offset().top;
        let posInvolved = scrollInvolved.offset().top;
        // let posInvolvedContent = scrollInvolvedContent.offset().top;
        // let posInvolvedImage = scrollInvolvedImage.offset().top;
        let posAcknow = scrollAcknow.offset().top;
        // let posFooter = scrollFooter.offset().top;

        // Section indicator
        if (wScroll > 0 && wScroll < posIntro) {
            sectionIndicator.html(" ");
        } else if (wScroll >= posIntro - windowH * startTrans && wScroll < posIndicatorImage - windowH * startTrans) {
            sectionIndicator.html("Introduction");
        } else if (wScroll >= posIndicatorImage - windowH * startTrans && wScroll < posInvolved - windowH * startTrans) {
            sectionIndicator.html("Learning");
        } else if (wScroll >= posInvolved - windowH * startTrans && wScroll < posAcknow - windowH * startTrans) {
            sectionIndicator.html("Get Involved");
        } else if (wScroll >= posAcknow - windowH * startTrans) {
            sectionIndicator.html("Acknowledgements");
        } else {
            sectionIndicator.html(" ");
        }

        //timeline section
        //logic: while scrolling in the timeline section, the margin would decrease from 100% to 0% for each $("project-timeline") element
        if (wScroll >= posTimeline - windowH * startTrans && wScroll < posTimeline + lengthTimeline - windowH * startTrans) {
            var countTimeOne = wScroll - (postimeone - windowH);
            var visibleTimeOne = (windowH + lengthtimeone) * 0.4;
            var percentTimeOne = (visibleTimeOne - countTimeOne) / visibleTimeOne * 100;

            if (countTimeOne >= 0 && countTimeOne <= visibleTimeOne) {
                animTimeOne.css("margin-left", percentTimeOne + "%");
            } else if (countTimeOne < 0) {
                animTimeOne.css("margin-left", 100 + "%");
            } else {
                animTimeOne.css("margin-left", 0 + "%");
            }
            var countTimeTwo = wScroll - (postimetwo - windowH);
            var visibleTimeTwo = (windowH + lengthtimetwo) * 0.4;
            var percentTimeTwo = (visibleTimeTwo - countTimeTwo) / visibleTimeTwo * 100;
            if (countTimeTwo >= 0 && countTimeTwo <= visibleTimeTwo) {
                animTimeTwo.css("margin-left", percentTimeTwo + "%");
            } else if (countTimeTwo < 0) {
                animTimeTwo.css("margin-left", 100 + "%");
            } else {
                animTimeTwo.css("margin-left", 0 + "%");
            }
            var countTimeThree = wScroll - (postimethree - windowH);
            var visibleTimeThree = (windowH + lengthtimethree) * 0.4;
            var percentTimeThree = (visibleTimeThree - countTimeThree) / visibleTimeThree * 100;
            if (countTimeThree >= 0 && countTimeThree <= visibleTimeThree) {
                animTimeThree.css("margin-left", percentTimeThree + "%");
            } else if (countTimeThree < 0) {
                animTimeThree.css("margin-left", 100 + "%");
            } else {
                animTimeThree.css("margin-left", 0 + "%");
            }
            var countTimeFour = wScroll - (postimefour - windowH);
            var visibleTimeFour = (windowH + lengthtimefour) * 0.4;
            var percentTimeFour = (visibleTimeFour - countTimeFour) / visibleTimeFour * 100;
            if (countTimeFour >= 0 && countTimeFour <= visibleTimeFour) {
                animTimeFour.css("margin-left", percentTimeFour + "%");
            } else if (countTimeFour < 0) {
                animTimeFour.css("margin-left", 100 + "%");
            } else {
                animTimeFour.css("margin-left", 0 + "%");
            }
            var countTimeFive = wScroll - (postimefive - windowH);
            var visibleTimeFive = (windowH + lengthtimefive) / 2;
            var percentTimeFive = (visibleTimeFive - countTimeFive) / visibleTimeFive * 100;
            if (countTimeFive >= 0 && countTimeFive <= visibleTimeFive) {
                animTimeFive.css("margin-left", percentTimeFive + "%");
            } else if (countTimeFive < 0) {
                animTimeFive.css("margin-left", 100 + "%");
            } else {
                animTimeFive.css("margin-left", 0 + "%");
            } 
        } else {
            animTimeFive.css("margin-left", 0 + "%");
            animTimeFour.css("margin-left", 0 + "%");
            animTimeThree.css("margin-left", 0 + "%");
            animTimeTwo.css("margin-left", 0 + "%");
            animTimeOne.css("margin-left", 0 + "%");
        }

    
}

function moduleClick() {
    function moduleOpenAnimate(tile, mod) {
        tile.click(function () {
            mod.addClass("learn-open").delay(300).queue(function (next) {
                $(this).addClass("learn-init");
                next();
            });
            body.addClass("modal-open");
            mod.siblings(".cat-learning-module").removeClass("learn-open learn-remove learn-init");
            mod.scrollTop(0);
        });
    };
    moduleOpenAnimate(struggleTile, scrollModStruggle);
    moduleOpenAnimate(inclusiveTile, scrollModInclusive);
    moduleOpenAnimate(accessTile, scrollModAccess);
    moduleOpenAnimate(academicTile, scrollModAcademic);

    var media = window.matchMedia("(min-width: 478px)");
    if (media.matches) {
        var element = 64;
    } else {
        var element = 16;
    }
    learnTile.mouseenter(function () {
        learnTile.each(function () {
            $(this).children(".learning").css("padding-right", $(this).children(".learning").css("padding-right") + element + "px");
        });
    }).mouseleave(function () {
        learnTile.each(function () {
            $(this).children(".learning").css("padding-right",$(this).children(".learning").css("padding-right")  - element + "px");
        });
    });
    moduleClose.click(function (event) {
        $(this).each(function () {
            $(this).parents(".cat-learning-module").addClass("learn-remove").delay(100).queue(function (next) {
                learnMod.removeClass("learn-open learn-remove learn-init");
                $(this).scrollTop(0);
                next();
            });
        });
        body.removeClass("modal-open");
        event.preventDefault();
    });
}

function modScroll() {
    function modTransition(first, second) {
        first.delay(100).queue(function(next){
            $(this).addClass("learn-remove").delay(200).queue(function (next) {
                $(this).removeClass("learn-open learn-remove learn-init");
                first.scrollTop(0);
                next();
            });
            next();
        });
        second.scrollTop(0);
        second.addClass("learn-open").delay(100).queue(function (next) {
            $(this).addClass("learn-init");
            next();
        });
        if (learnMod.css("display") == "flex") {
            body.addClass("modal-open");
        } else {
            body.removeClass("modal-open");
        }
    }
    
    scrollModStruggle.scroll(function () {
        let posEndModStruggle = scrollEndModStruggle.position().top;
        //learning section
        var modScroll01 = scrollModStruggle.scrollTop();

        if (modScroll01 >= posEndModStruggle - windowH * startTrans) {
            modTransition(scrollModStruggle, scrollModInclusive);
            modScroll01 = 0;
        }
    });
    scrollModInclusive.scroll(function () {
        let posEndModInclusive = scrollEndModInclusive.position().top;
        //learning section
        var modScroll02 = scrollModInclusive.scrollTop();
        if (modScroll02 >= posEndModInclusive - windowH * startTrans) {
            modTransition(scrollModInclusive, scrollModAccess);
            modScroll02 = 0;
        }
    });
    scrollModAccess.scroll(function () {
        let posEndModAccess = scrollEndModAccess.position().top;
        //learning section
        var modScroll03 = scrollModAccess.scrollTop();
        if (modScroll03 >= posEndModAccess - windowH * startTrans) {
            modTransition(scrollModAccess, scrollModAcademic);
            modScroll03 = 0;
        }
    });
    scrollModAcademic.scroll(function () {
        let posEndModAcademic = scrollEndModAcademic.position().top;
        let posInvolved = scrollInvolved.offset().top;
        //learning section
        var modScroll04 = scrollModAcademic.scrollTop();
        if (modScroll04 >= posEndModAcademic - windowH * startTrans) {
            scrollModAcademic.addClass("learn-remove").delay(50).queue(function (next) {
                learnMod.removeClass("learn-open learn-remove learn-init");
                modScroll04 = 0;
                $(this).scrollTop(0);
                next();
            });
            $('html,body').animate({ scrollTop: posInvolved }, 'medium');
            body.removeClass("modal-open");
        }
    });
    // back button
    scrollBackModStruggle.click(function(){
        let posLearn = scrollLearn.offset().top;
        body.removeClass("modal-open");
        scrollModStruggle.addClass("learn-remove").delay(200).queue(function (next) {
            learnMod.removeClass("learn-open learn-remove learn-init");

            $(this).scrollTop(0);
            next();
        });
        $('html,body').animate({ scrollTop: posLearn }, 'medium');
    });
    scrollBackModInclusive.click(function(){
        modTransition(scrollModInclusive,scrollModStruggle);
    });
    scrollBackModAccess.click(function(){
        modTransition(scrollModAccess,scrollModInclusive);
    });
    scrollBackModAcademic.click(function(){
        modTransition(scrollModAcademic,scrollModAccess);
    });
}

function navLink() {
    function closeNav(link) {
        link.click(function (event) {
            navMenu.css({
                "transform": "translate3d(0, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                w
            }).delay(550).queue(function () {
                $(this).removeClass("opened").dequeue();
            });
            body.removeClass("modal-open");
            event.preventDefault();
        });
    }
    function prepClick(item) {
        if (item.attr('html') !== 'undefined' || $(this).attr('html') !== false) {
            item.removeAttr("href");
        }
    }

    prepClick(navHam);
    prepClick(closeButt);
    closeNav(navLinkItem);
    closeNav(navClose);
    navHam.click(function (event) {
        navMenu.addClass("opened").delay(30).queue(function () {
            $(this).css({
                "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            }).dequeue();
        });
        event.preventDefault();
        body.addClass("modal-open");
    });

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
    let animateLine = $(".animateline");
    animateChar.lettering();
    animateWord.lettering('words');
    animateLine.lettering('lines');
}

function mapClick() {
    function siblingEffector(button) {
        button.siblings(".cat-chapter-button").css({
            "background-color": "#2D2522",
            "color": "#F4F2EF"
        });
        button.siblings(".cat-chapter-button").children(".chapter-content-p").css({
            "display": "none"
        });
        button.siblings(".cat-chapter-button").children(".chapter-box").css({
            "display": "none"
        });
    }
    function mapdot(location) {
        location.css({
            "border-color": "#DF693D",
            "border-width": "4px",
            "width": "25px",
            "height": "25px"
        });
        location.each(function () {
            $(this).siblings(".map-dot").css({
                "border-color": "#2d2522",
                "border-width": "6px",
                "width": "5px",
                "height": "5px"
            });
        });
    }
    function mapZoom() {
        mapPosition.css({
            "min-height": "200vw",
            "min-width": "200vw"
        });
    }

    mapArea.on("click", function (event) {
        if ($(event.target).closest("#chapter-bishop").length) {
            console.log("bishop");
            catMap.css({
                "bottom": 27.3112807464 + "%",
                "right": "24.2578456319%",
                "left": "auto",
                "top": "auto"

            });
            mapZoom();
            siblingEffector(bishopButton);
            mapdot(bishopDot);
        } else if ($(event.target).closest("#chapter-camosun").length) {
            console.log("camosun");
            catMap.css({
                "bottom": 19.1687871077 + "%",
                "right": "auto",
                "left": "39.8642917727%",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(camosunButton);
            mapdot(camosunDot);
        } else if ($(event.target).closest("#chapter-dalhousie").length) {
            console.log("dalhousie");
            catMap.css({
                "bottom": 22.9007633588 + "%",
                "right": "35.4537743851%",
                "left": "auto",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(dalhousieButton);
            mapdot(dalhousieDot);
        } else if ($(event.target).closest("#chapter-lakehead").length) {
            console.log("lakehouse");
            catMap.css({
                "bottom": 27.0568278202 + "%",
                "right": "1.69635284139%",
                "left": "auto",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(lakeheadButton);
            mapdot(lakeheadDot);
        } else if ($(event.target).closest("#chapter-tmu").length) {
            console.log("tmu");
            catMap.css({
                "bottom": 33.0788804071 + "%",
                "right": "16.6242578456%",
                "left": "auto",
                "top": "auto"
                // "height": "200vw",
                // "width": "200vw",
            });
            mapZoom();
            siblingEffector(tmuButton);
            mapdot(tmuDot);
        } else if ($(event.target).closest("#chapter-trent").length) {
            console.log("trent");
            catMap.css({
                "bottom": 31.5521628499 + "%",
                "right": "17.3876166243%",
                "left": "auto",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(trentButton);
            mapdot(trentDot);
        } else if ($(event.target).closest("#chapter-guelph").length) {
            console.log("guelph");
            catMap.css({
                "bottom": 33.8422391858 + "%",
                "right": "14.588634436%",
                "left": "auto",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(guelphButton);
            mapdot(guelphDot);
        } else if ($(event.target).closest("#chapter-brunswick").length) {
            console.log("brunswick");
            catMap.css({
                "bottom": 24.5971162002 + "%",
                "right": "31.6369804919%",
                "left": "auto",
                "top": "auto"
            });
            siblingEffector(brunButton);
            mapdot(brunDot);
        } else if ($(event.target).closest("#chapter-toronto").length) {
            console.log("toronto");
            catMap.css({
                "bottom": 33.3333333333 + "%",
                "right": "16.2849872774%",
                "left": "auto",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(torontoButton);
            mapdot(torontoDot);
        } else if ($(event.target).closest("#chapter-windsor").length) {
            console.log("windsor");
            catMap.css({
                "bottom": 37.4893977947 + "%",
                "right": "11.5351993215%",
                "left": "auto",
                "top": "auto"
            });
            mapZoom();
            siblingEffector(windsorButton);
            mapdot(windsorDot);
        } else {
            chapter.each(function () {
                $(this).css({
                    "background-color": "#2D2522",
                    "color": "#F4F2EF"
                });
                $(this).children(".chapter-content-p").css({
                    "display": "none"
                });
                $(this).children(".chapter-box").css({
                    "display": "none"
                });
                catMap.css({
                    "bottom": "auto",
                    "right": "auto",
                    "left": "auto",
                    "top": "auto"
                });
                mapPosition.css({
                    "min-width": "100vw",
                    "min-height": "100vw"
                });
                mapDot.each(function () {
                    $(this).css({
                        "border-color": "#2d2522",
                        "border-width": "6px",
                        "width": "5px",
                        "height": "5px"
                    });
                });
            });
        }
    });

}

(function ($) {
    $(window).on('resize', function () {
        var scrollHeight = $("body").innerHeight(); //the total height of the page that will scroll
        var windowH = $(window).innerHeight();
        moduleClick();  
    });
    animateType();
    navLink();
    smoothScroll();
    $(window).scroll($.throttle(30, windowScroll));
    moduleClick();
    modScroll();
    mapClick();
}(jQuery));

