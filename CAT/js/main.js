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
    let learnTile = $(".learning-tile");

    let scrollModStruggle = $('#learning-struggle');
    let scrollModInclusive = $('#learning-inclusive');
    let scrollModAccess = $('#learning-access');
    let scrollModAcademic = $('#learning-academic');

    let moduleClose = $(".cat-learning-module .close-button");
    let struggleTile = $(".learning-tile.struggle");
    let inclusiveTile = $(".learning-tile.inclusivity");
    let accessTile = $(".learning-tile.access");
    let academicTile = $(".learning-tile.academic");
    console.log("close-module");
    // click
    struggleTile.click(function () {
        scrollModStruggle.addClass("learn-open").delay(500).queue(function(){
            $(this).addClass("learn-init").dequeue();
        });
        console.log("open-struggle");
    });
    inclusiveTile.click(function () {
        scrollModInclusive.addClass("learn-open").delay(500).queue(function(){
            $(this).addClass("learn-init").dequeue();
        });
        console.log("open-inclusive");
    });
    accessTile.click(function () {
        scrollModAccess.addClass("learn-open").delay(500).queue(function(){
            $(this).addClass("learn-init").dequeue();
        });
        console.log("open-access");
    });
    academicTile.click(function () {
        scrollModAcademic.addClass("learn-open").delay(500).queue(function(){
            $(this).addClass("learn-init").dequeue();
        });
        console.log("open-academic");
    });

    learnTile.mouseenter(function(){  
        
        function functionX(x) {
            var pad = $(this).children(".learning").css("padding-right");

            if (x.matches) {
                $(this).each(function(){
                    $(this).children(".learning").css("padding-right", pad+64);
                });
            } else {
                $(this).each(function(){
                    $(this).children(".learning").css("padding-right", pad+16);
                });
            }
        }
        var x = window.matchMedia("(min-width: 478px)");
        functionX(x);
        x.addEventListener("mouseenter",functionX);      
    }).mouseleave(function(){
        function functionX(x) {
            var pad = $(this).children(".learning").css("padding-right");

            if (x.matches) {
                $(this).each(function(){
                    $(this).children(".learning").css("padding-right", pad-64);
                });
            } else {
                $(this).each(function(){
                    $(this).children(".learning").css("padding-right", pad-16);
                });
            }
        }
        var x = window.matchMedia("(min-width: 478px)");
        functionX(x);
        x.addEventListener("mouseleave",functionX);  
    })
    
    moduleClose.click(function () {
        $(this).each(function () {
            $(this).parents(".cat-learning-module").addClass("learn-remove").delay(1000).queue(function(){
                $(".cat-learning-module").removeClass("learn-open learn-remove learn-init").dequeue();
                console.log("reset");
            });
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
        let posModStruggle = scrollModStruggle.position().top;
        let posModInclusive = scrollModInclusive.position().top;
        let posModAccess = scrollModAccess.position().top;
        let posModAcademic = scrollModAcademic.position().top;

        let posEndModStruggle = scrollEndModStruggle.position().top;
        let posEndModInclusive = scrollEndModInclusive.position().top;
        let posEndModAccess = scrollEndModAccess.position().top;
        let posEndModAcademic = scrollEndModAcademic.position().top;

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
function highChart(){
    Highcharts.setOptions({
        chart: {
            backgroundColor: "#3990DC",
            borderWidth: 2,
            plotBackgroundColor: '#2D2522',
            plotShadow: true,
            plotBorderWidth: 1,
            style: {
                fontFamily: 'Helvetica',
                fontSize: 21,
                fontColor: "#2D2522"
            }
        }
    });

    const data = [63.14, 40.26, 20.17, 17.96, 14.34, 11.88, 9.60, 7.43, 6.96, 6.55, 4.39, 3.63, 2.75, 1.93, 1.35, 1.05, 1.05];

    document.addEventListener('DOMContentLoaded', function () {
        const chart = Highcharts.chart('barchart', {
            chart: {
                type: 'bar',

                width: '100%',
                height: '100%'
            },
            title: {
                text: 'Causes of Struggle Survey'
            },
            xAxis: {
                categories: ['Academic stress', 'Financial stress', 'COVID-19 pandemic', 'Relationships with family', 'Finding a job', 'Work stress', 'Relationships with peers', 'Dating', 'Other health-related stress', 'Housing stress', 'Other - Write In', 'Social media', 'Climate change', 'Food insecurity', 'My own substance use', 'Substance use by friends or family', 'Experiences with the justice system' ],
                lineColor: "#2d2522"
            },
            yAxis: {
                title: {
                    text: 'Percent (%) of students'
                },
                lineColor: "#2d2522"
            },
            tooltip: {
                pointFormat: '{point.category}: {point.y}',
                style: {
                    color: '#F4F2EF',
                    fontSize: "18px"
                },
                backgroundColor:"#2D2522"
                
            },
            series: [{
                name:'Percent (%) of students',
                data: data
            }],
            legend: {
                enabled: false
            }
        });
        var categories = [
            "The campus mental health services I used were high quality ",
            "The campus mental health services I used were accessible when I needed them",
            "The campus mental health services  I used met my needs",	
            "The campus mental health services I used were responsive to my background and experiences"
        ];
        const chartdiv02 = Highcharts.chart('chartdiv02', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Service User Perceptions'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: 'Agree'
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: 'Disagree'
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                },
                accessibility: {
                    description: 'Survey Questions'
                }
            },
        
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
        
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                }
            },
        
            series: [{
                name: 'Strongly Disagree',
                data: [
                    -4.97,	-9.27,	-10.26,	-8.61
                ]
            }, {
                name: 'Disagree',
                data: [
                    -6.62,	-15.89,	-15.23,	-10.26
                ]
            }, {
                name: 'Neutral',
                data: [
                    -27.15, -25.83,	-27.81,	-27.15
                ]
            }, {
                name: 'Agree',
                data: [
                    37.75,	28.15,	28.81,	26.49
                ]
            }, {
                name: 'Strongly Agree',
                data: [
                    23.51,	20.86,	17.88,	27.48
                ]
            }]
        });
            
    });

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
                "transform": "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            }).dequeue();
        });
        console.log("open-menu")
    });
    navLink.click(function () {
        navMenu.css({
            "transform": "translate3d(0, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 90%)"
        }).delay(550).queue(function () {
            $(this).removeClass("opened").dequeue();
        });
        console.log("close-menu")
    });
    navClose.click(function () {
        navMenu.css({
            "transform": "translate3d(0%, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 90%)"
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
function mapClick() {
    let chapter = $(".cat-chapter-button");
    let mapArea = $(".cat-sec-container.map");
    mapArea.on("click", function(event){
        if($(event.target).closest(".cat-chapter-button").length){
            console.log("click on button");
            $(this).each(function(){
                $(this).siblings(".cat-chapter-button").css({
                    "background-color":"#2D2522",
                    "color":"#F4F2EF"
                });
                $(this).siblings(".cat-chapter-button").children(".chapter-content-p").css({
                    "display":"none"
                });
                $(this).siblings(".cat-chapter-button").children(".chapter-box").css({
                    "display":"none"
                })
            });
        } else {
            chapter.each(function(){
                $(this).css({
                    "background-color":"#2D2522",
                    "color":"#F4F2EF"
                });
                $(this).children(".chapter-content-p").css({
                    "display":"none"
                });
                $(this).children(".chapter-box").css({
                    "display":"none"
                })
                $(this).siblings(".cat-chapter-button").css({
                    "background-color":"#2D2522",
                    "color":"#F4F2EF"
                });
                $(this).siblings(".cat-chapter-button").children(".chapter-content-p").css({
                    "display":"none"
                });
                $(this).siblings(".cat-chapter-button").children(".chapter-box").css({
                    "display":"none"
                })
                catMap.css({
                    "bottom":"auto",
                    "right":"auto",
                    "left":"auto",
                    "top":"auto",
                    "width":"100vw",
                    "height":"100vw"
                })
            })
        }
    })

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

    let catMap = $(".cat-map-object");
    bishopButton.click(function(){
        catMap.css({
            "bottom":"27.3112807464vw",
            "right":"24.2578456319vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    camosunButton.click(function(){
        catMap.css({
            "bottom":"19.1687871077vw",
            "right":"auto",
            "left":"39.8642917727vw",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    dalhousieButton.click(function(){
        catMap.css({
            "bottom":"22.9007633588vw",
            "right":"35.4537743851vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    lakeheadButton.click(function(){
        catMap.css({
            "bottom":"27.0568278202vw",
            "right":"1.69635284139vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    tmuButton.click(function(){
        catMap.css({
            "bottom":"33.0788804071vw",
            "right":"16.6242578456vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    trentButton.click(function(){
        catMap.css({
            "bottom":"31.5521628499vw",
            "right":"17.3876166243vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    guelphButton.click(function(){
        catMap.css({
            "bottom":"33.8422391858vw",
            "right":"14.588634436vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    brunButton.click(function(){
        catMap.css({
            "bottom":"24.5971162002vw",
            "right":"31.6369804919vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    torontoButton.click(function(){
        catMap.css({
            "bottom":"33.3333333333vw",
            "right":"16.2849872774vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })
    windsorButton.click(function(){
        catMap.css({
            "bottom":"37.4893977947vw",
            "right":"11.5351993215vw",
            "left":"auto",
            "top":"auto",
            "height":"200vw",
            "width":"200vw"
        })
    })

}

(function ($) {
    animateType();
    navLink();
    smoothScroll();
    windowScroll();
    moduleClick();
    moduleScroll();
    highChart();
    mapClick();
    $(window).on('resize', function () {
        windowScroll();
        moduleScroll();
    });


}(jQuery));

