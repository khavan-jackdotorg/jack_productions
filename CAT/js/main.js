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
    let startTrans = 0.75;

    // Objects
    let sectionIndicator = $(".sectionindicator");

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


    $(window).scroll(function () {
        //changing scroller value
        var wScroll = $(window).scrollTop();
        // CHECK console.log(wScroll + " scroll position");

        // Window Position Information
        let posIntro = scrollIntro.offset().top;
        let posIntroContent = scrollIntroContent.offset().top;
        let posIntroImage = scrollIntroImage.offset().top;
        let posMap = scrollMap.offset().top;
        let posMapImage = scrollMapImage.offset().top;
        let posWhy = scrollWhy.offset().top;
        let posOffers = scrollOffers.offset().top;
        let posOffersImage = scrollOffersImage.offset().top;
        let posTimeline = scrollTimeline.offset().top;
        let posTimelineImage = scrollTimelineImage.offset().top;
        let postimeone = scrollTimeOne.offset().top;
        let postimetwo = scrollTimeTwo.offset().top;
        let postimethree = scrollTimeThree.offset().top;
        let postimefour = scrollTimeFour.offset().top;
        let postimefive = scrollTimeFive.offset().top;
        let posIndicator = scrollIndicator.offset().top;
        let posIndicatorContent = scrollIndicatorContent.offset().top;
        let posIndicatorImage = scrollIndicatorImage.offset().top;
        let posLearn = scrollLearn.offset().top;
        let posLearnContent = scrollLearnContent.offset().top;
        let posLearnImage = scrollLearnImage.offset().top;
        let posInvolved = scrollInvolved.offset().top;
        let posInvolvedContent = scrollInvolvedContent.offset().top;
        let posInvolvedImage = scrollInvolvedImage.offset().top;
        let posAcknow = scrollAcknow.offset().top;
        let posFooter = scrollFooter.offset().top;

        let mScrollPercent = (wScroll / (scrollHeight - windowH)) * 100;
        // console.log(mScrollPercent);

        // Section indicator
        if (wScroll > 0 && wScroll < posIntro) {
            // console.log("blank header section");
            sectionIndicator.html(" ");
        } else if (wScroll >= posIntro - windowH * startTrans && wScroll < posIndicatorImage - windowH * startTrans) {
            // console.log(posIntro + "Intro");
            sectionIndicator.html("Introduction");
        } else if (wScroll >= posIndicatorImage - windowH * startTrans && wScroll < posInvolved - windowH * startTrans) {
            // console.log(posLearn + "Learn");
            sectionIndicator.html("Learning");
        } else if (wScroll >= posInvolved - windowH * startTrans && wScroll < posAcknow - windowH * startTrans) {
            // console.log(posInvolved + "Involved");
            sectionIndicator.html("Get Involved");
        } else if (wScroll >= posAcknow - windowH * startTrans) {
            // console.log(posAcknow + "Acknow");
            sectionIndicator.html("Acknowledgements");
        } else {
            // console.log("blank header section");
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
        }

        //indicator section

    });


}
function moduleClick() {
    //   // Modules
    let scrollModStruggle = $('#learning-struggle');
    let scrollModInclusive = $('#learning-inclusive');
    let scrollModAccess = $('#learning-access');
    let scrollModAcademic = $('#learning-academic');

    let moduleClose = $(".cat-learning-module .close-button");
    let struggleTile = $(".learning-tile.struggle");
    let inclusiveTile = $(".learning-tile.inclusivity");
    let accessTile = $(".learning-tile.access");
    let academicTile = $(".learning-tile.academic");

    struggleTile.click(function () {
        scrollModStruggle.addClass("learn-open");
        console.log("open-struggle");
    });
    inclusiveTile.click(function () {
        scrollModInclusive.addClass("learn-open");
        console.log("open-inclusive");
    });
    accessTile.click(function () {
        scrollModAccess.addClass("learn-open");
        console.log("open-access");
    });
    academicTile.click(function () {
        scrollModAcademic.addClass("learn-open");
        console.log("open-academic");
    });

    moduleClose.click(function () {
        $(this).each(function () {
            $(this).parents(".cat-learning-module").removeClass("learn-open");
            console.log("close-module");
        });
        

    });
}
function moduleScroll() {
    let windowH = $(window).innerHeight(); //the total height of the visible window
    let startTrans = 0.75;
    let scrollModStruggle = $('#learning-struggle');
    let scrollModInclusive = $('#learning-inclusive');
    let scrollModAccess = $('#learning-access');
    let scrollModAcademic = $('#learning-academic'); 

    let scrollEndModStruggle = $('#learning-struggle .scrolling-space');
    let scrollEndModInclusive = $('#learning-inclusive .scrolling-space');
    let scrollEndModAccess = $('#learning-access .scrolling-space');
    let scrollEndModAcademic = $('#learning-academic .scrolling-space');
    // Modules
    let lengthModStruggle = scrollModStruggle.innerHeight();
    let lengthModInclusive = scrollModInclusive.innerHeight();
    let lengthModAccess = scrollModAccess.innerHeight();
    let lengthModAcademic = scrollModAcademic.innerHeight();

    let lengthEndModStruggle = scrollEndModStruggle.innerHeight();
    let lengthEndModInclusive = scrollEndModInclusive.innerHeight();
    let lengthEndModAccess = scrollEndModAccess.innerHeight();
    let lengthEndModAcademic = scrollEndModAcademic.innerHeight();

    scrollModStruggle.scroll(function () {
        // Position
        let posModStruggle = scrollModStruggle.offset().top;
        let posModInclusive = scrollModInclusive.offset().top;
        let posModAccess = scrollModAccess.offset().top;
        let posModAcademic = scrollModAcademic.offset().top;

        let posEndModStruggle = scrollEndModStruggle.offset().top;
        let posEndModInclusive = scrollEndModInclusive.offset().top;
        let posEndModAccess = scrollEndModAccess.offset().top;
        let posEndModAcademic = scrollEndModAcademic.offset().top;

        //learning section
        var modScroll01 = scrollModStruggle.scrollTop();

        console.log(posModStruggle + "scrolling item");
        if (modScroll01 >= posEndModStruggle - windowH * startTrans) {
            console.log(modScroll01 + "open next module")
            scrollModStruggle.css({
                "display": "none",
                "transform": "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                "opacity": 0,
                "transform-style": "preserve-3d"
            })
        }

    });
}
function chart() {
    const labels = ['Academic stress', 'Financial stress', 'COVID-19 pandemic', 'Relationships with family', 'Finding a job', 'Work stress', 'Relationships with peers', 'Dating', 'Other health-related stress', 'Housing stress', 'Other - Write In', 'Social media', 'Climate change', 'Food insecurity', 'My own substance use', 'Substance use by friends or family', 'Experiences with the justice system'
    ];
    //setup
    const data = {
        labels: labels,
        datasets: [{
            label: 'Percent (%) cause of struggle',
            data: [63.14, 40.26, 20.17, 17.96, 14.34, 11.88, 9.60, 7.43, 6.96, 6.55, 4.39, 3.63, 2.75, 1.93, 1.35, 1.05, 1.05],
            backgroundColor: [
                '#F4F2EF'
            ]
        }]
    }
    //config
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                x: {
                    beginAtZero: true
                }
            },
            indexAxis: 'y'
        }
    }
    //render
    const myBarChart = new Chart(
        document.getElementById('myBarChart'),
        config
    );
}
function navLink() {
    let navHam = $(".nav-hamburger");
    let navLink = $(".nav-link");
    let navClose = $(".cat-navmenu-item .close-button");
    let navMenu = $(".cat-navmenu-pop");
    let closeButt = $(".close-button");

    navHam.each(function () {
        if ($(this).attr('html') !== 'undefined' || $(this).attr('html') !== false) {
            $(this).removeAttr("href");
        }
    })
    closeButt.each(function () {
        if ($(this).attr('html') !== 'undefined' || $(this).attr('html') !== false) {
            $(this).removeAttr("href");
        }
    })
    navHam.click(function () {
        navMenu.addClass("opened").delay(30).queue(function () {
            $(this).css({
                "opacity": "1",
                "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            }).dequeue();
        });
        console.log("open-menu")
    });
    navLink.click(function () {
        navMenu.css({
            "opacity": "0",
            "transform": "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            "clip-path": "polygon(0 0, 100% 0, 100% 85%, 0% 100%)"
        }).delay(550).queue(function () {
            $(this).removeClass("opened").dequeue();
        });
        console.log("close-menu")
    });
    navClose.click(function () {
        navMenu.css({
            "opacity": "0",
            "transform": "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            "clip-path": "polygon(0 0, 100% 0, 100% 85%, 0% 100%)"
        }).delay(550).queue(function () {
            $(this).removeClass("opened").dequeue();
        });
        console.log("close-menu")
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
    let animateLine = $(".animateline")
    animateChar.lettering();
    animateWord.lettering('words');
    animateLine.lettering('lines');
}

(function ($) {
    animateType();
    navLink();
    smoothScroll();
    windowScroll();
    moduleClick();
    moduleScroll();
    chart();
    $(window).on('resize', function () {
        windowScroll();
    });


}(jQuery));

