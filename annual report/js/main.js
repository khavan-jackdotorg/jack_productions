
// Variables
let $body = $("body");
var $scrollHeight = $("body").innerHeight(); //the total height of the page that will scroll
var $windowH = $(window).innerHeight(); //the total height of the visible window
let $sectionIndicator = $(".sectionindicator");

function windowScroll() {
    var $wScroll = $(window).scrollTop();

    // Section indicator
    if ($wScroll > 0 && $wScroll < posIntro) {
        $sectionIndicator.html(" ");
    } else if ($wScroll >= posIntro - windowH * startTrans && wScroll < posIndicatorImage - windowH * startTrans) {
        $sectionIndicator.html("Introduction");
    } else if ($wScroll >= posIndicatorImage - windowH * startTrans && wScroll < posInvolved - windowH * startTrans) {
        $sectionIndicator.html("Learning");
    } else if ($wScroll >= posInvolved - windowH * startTrans && wScroll < posAcknow - windowH * startTrans) {
        $sectionIndicator.html("Get Involved");
    } else if ($wScroll >= posAcknow - windowH * startTrans) {
        $sectionIndicator.html("Acknowledgements");
    } else {
        $sectionIndicator.html(" ");
    }
}
function dropDown() {
    let $droplink = $('.annual-tile > .cat-button');
    let $dropHidden = $('drop-hidden');
    let $dropContent = $('annual-drop-content');
    let $dropClose = $('annual-drop-close');
    $droplink.click(function (event){
        $dropHidden.addClass("drop-reveal");
    });
    $dropClose.click(function (){
        $dropHidden.removeClass("drop-reveal");
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
    let $navClose = $(".cat-navmenu-item .close-button");
    let $navMenu = $(".cat-navmenu-pop");

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
    function prepClick(item) {
        if (item.attr('html') !== 'undefined' || $(this).attr('html') !== false) {
            item.removeAttr("href");
        }
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
}(jQuery));
