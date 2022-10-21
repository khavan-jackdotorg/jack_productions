
// Variables
let $body = $("body");
var $scrollHeight = $("body").innerHeight(); //the total height of the page that will scroll
var $windowH = $(window).innerHeight(); //the total height of the visible window
let $sectionIndicator = $(".sectionindicator");

function prepClick(item) {
    if (item.attr('html') !== 'undefined' || $(this).attr('html') !== false) {
        item.removeAttr("href");
    }
}
function windowScroll() {
    // let $scrollHead = $("#header");
    // let $scrollLand= $("#land");
    // let $scrollLetter = $("#letter-img");
    // let $scrollRep = $("#rep");
    // let $scrollAdvisors = $("#advisors");
    // let $scrollEqual = $("#equal");
    // let $scrollPrograms = $("#programs");
    //     let $scrollTalks = $("#talks");
    //     let $scrollChapters = $("#chapters");
    //     let $scrollSummits = $("#summits");
    //     let $scrollBethere = $("#bethere");
    //     let $scrollYVR = $("#yvr");
    // let $scrollDev = $("#dev");
    //     let $scrollBrainfreeze = $("#brainfreeze");
    //     let $scrollRide = $("#ride");
    //     let $scrollInstitutional = $("#institutional");
    //     let $scrollCommunity = $("#community");
    // let $scrollstory = $("#story");
    //     let $scrollDigital = $("#digital");
    //     let $scrollOriginals = $("#originals");
    //     let $scrollDemystified = $("#demystied");
    //     let $scrollAnthem = $("#anthemy");
    // let $scrollFinance = $("#finance");
    // let $scrollGrow = $("#grow");
    // let $scrollFund = $("#fund");
    // let $scrollFoot = $("#footer");

    let $posHead = $("#header").offset().top;
    let $posLand= $("#Land").offset().top;
    let $posLetter = $("#letter-img").offset().top;
    let $posRep = $("#rep").offset().top;
    let $posAdvisors = $("#advisors").offset().top;
    let $posEqual = $("#equal").offset().top;
    let $scrollPrograms = $("#programs").offset().top;
        let $scrollTalks = $("#talks").offset().top;
        let $scrollChapters = $("#chapters").offset().top;
        let $scrollSummits = $("#summits").offset().top;
        let $scrollBethere = $("#bethere").offset().top;
        let $scrollYVR = $("#yvr").offset().top;
    let $scrollDev = $("#dev").offset().top;
        let $scrollBrainfreeze = $("#brainfreeze").offset().top;
        let $scrollRide = $("#ride").offset().top;
        let $scrollInstitutional = $("#institutional").offset().top;
        let $scrollCommunity = $("#community").offset().top;
    let $scrollstory = $("#story").offset().top;
        let $scrollDigital = $("#digital").offset().top;
        let $scrollOriginals = $("#originals").offset().top;
        let $scrollDemystified = $("#demystied").offset().top;
        let $scrollAnthem = $("#anthemy").offset().top;
    let $scrollFinance = $("#finance").offset().top;
    let $scrollGrow = $("#grow").offset().top;
    let $scrollFund = $("#fund").offset().top;
    let $scrollFoot = $("#footer").offset().top;

    var $wScroll = $(window).scrollTop();

    // Section indicator
    if ($wScroll > 0 && $wScroll < $posHead) {
        $sectionIndicator.html(" ");
    } else if ($wScroll >= $posHead - windowH * startTrans && wScroll < $posLand - windowH * startTrans) {
        $sectionIndicator.html("Header");
    } else if ($wScroll >= $posLand - windowH * startTrans && wScroll < $posLetter - windowH * startTrans) {
        $sectionIndicator.html("Land Acknowledgement");
    } else if ($wScroll >= $posLetter - windowH * startTrans && wScroll < $posRep - windowH * startTrans) {
        $sectionIndicator.html("Messages");
    } else if ($wScroll >= $posRep - windowH * startTrans && wScroll < $posAdvisors - windowH * startTrans) {
        $sectionIndicator.html("Network Representatives");
    } else if ($wScroll >= $posAdvisors - windowH * startTrans && wScroll < $posEqual - windowH * startTrans) {
        $sectionIndicator.html("Network Advisors");
    } else if ($wScroll >= $posEqual - windowH * startTrans && wScroll < $posPrograms - windowH * startTrans) {
        $sectionIndicator.html("The Path to Equal Opportunities");
    } else if ($wScroll >= $posRep - windowH * startTrans && wScroll < $posAdvisors - windowH * startTrans) {
        $sectionIndicator.html("Network Representatives");
    
    
    } else {
        $sectionIndicator.html(" ");
    }
}
function dropDown() {
    let $droplink = $('.annual-tile > .annual-button');
    let $dropTile = $('.annual-tile');
    // let $dropHidden = $('.drop-hidden');
    let $dropContent = $('.annual-drop-content');
    
    let $dropClose = $('.annual-drop-close');
    
    $droplink.click(function (){
        if ($(this).parent().hasClass("drop-reveal")) {
            
            $droplink.removeAttr("href");
            $dropContent.removeClass("drop-reveal");
            $(this).parents('.tile-sec').children('.annual-drop-content').removeClass("drop-reveal"); //should do the same thing
            $(this).parents('.annual-tile').removeClass("drop-reveal");
            $(this).parents('.annual-tile').siblings('.annual-drop-content').removeClass("drop-reveal");        
            $(this).parent().removeClass("drop-reveal");
            $(this).children().text("Learn More");
            console.log('close-dropdown');
        } else {
            
            $droplink.removeAttr("href");
            $dropContent.removeClass("drop-reveal");
            $(this).parents('.tile-sec').children('.annual-drop-content').removeClass("drop-reveal");

            $(this).parents('.annual-tile').siblings('.annual-drop-content').addClass("drop-reveal");
            $(this).parent().addClass("drop-reveal");
            $(this).children().text("Hide Content");
            console.log('open-dropdown');
        }
    });
    $dropClose.click(function (){
        
        $dropClose.removeAttr("href");
        $dropContent.removeClass("drop-reveal");
        $(this).parents('.tile-sec').children('.annual-drop-content').removeClass("drop-reveal");

        $(this).parents('.annual-tile').siblings('.annual-drop-content').removeClass("drop-reveal");
        $(this).parent().removeClass("drop-reveal");
        $(this).children().text("Learn More");
        console.log('close-dropdown');
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

function navLink() {
    // navigation
    let $navHam = $(".nav-hamburger");
    let $navLinkItem = $(".nav-link");
    let $closeButt = $(".close-button");
    let $navClose = $(".annual-navmenu-top .close-button");
    let $navMenu = $(".annual-navmenu-pop");

    function closeNav(link) {
        link.click(function (event) {
            $navMenu.css({
                "transform": "translate3d(0, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 90%)"
            }).delay(550).queue(function () {
                $(this).removeClass("opened").dequeue();
            });
            $body.removeClass("modal-open");
            event.preventDefault();
        });
    }


    prepClick($navHam);
    prepClick($closeButt);
    closeNav($navLinkItem);
    closeNav($navClose);
    $navHam.click(function (event) {
        $navMenu.addClass("opened").delay(30).queue(function () {
            $(this).css({
                "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            }).dequeue();
        });
        event.preventDefault();
        $body.addClass("modal-open");
    });

}

function mapClick() {
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
    });
    mapClick();
    dropDown();
    animateType();
    navLink();
    // smoothScroll();
    // $(window).scroll($.throttle(30, windowScroll));
}(jQuery));
