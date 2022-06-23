let tileCont = $(".resource-tilebox");
let tilePrideSupport = $("#pride-support");
let tileFrancSupport = $("#francophone-support");
let tileAdvocate = $("#advocate");
let tilePodcast = $("#podcasts");
let tileBooks = $("#books");
let tileMovie = $("#movies");
let tileStories = $("#stories");

//buttons
let noneButton = $(".none");
let allButton = $(".all");
let fewButton = $(".few");

function tileHide() {

    noneButton.click(function () { // hide all children of the collection list
        $(this).each(function () {
            $(this).parent().parent().parent().find(".resource-tilebox").children().addClass("tile-hidden");
        });
        $(this).addClass("button-selected");
        $(this).siblings().removeClass("button-selected");
        $(this).parent().parent().parent().find(".resource-collection").addClass("tile-hidden");
    });
    allButton.click(function () { // show all children of the collection list
        $(this).each(function () {
            $(this).parent().parent().parent().find(".resource-tilebox").children().removeClass("tile-hidden");
        });
        $(this).addClass("button-selected");
        $(this).siblings().removeClass("button-selected");
        $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
    });


}
function fewButton() {
    let resizer = $(window).width();
    //initial state of each line
    tileCont.each(function () {
        //hide the elements that are not there
        $(this).children().slice(3).addClass("tile-hidden");
    });
    //media based sizing
    if (resizer < 480) {

    } else if (resizer < 768 && resizer >= 480) {

    } else if (resizer < 992 && resizer >= 768) {

    } else if (resizer < 1279 && resizer >= 992) {
    
    } else if (resizer < 1440 && resizer >= 1279) {
    
    } else if (resizer < 1920 && resizer >= 1440) {

    } else if (resizer >= 1920) {

    } else {
        // general statement
        fewButton.click(function () { // show only the first three children of the colleciton list
            $(this).each(function () {
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(3).addClass("tile-hidden");
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 2).removeClass("tile-hidden");
            });
            $(this).addClass("button-selected");
            $(this).siblings().removeClass("button-selected");
            $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
        });
    }

    tilePrideSupport.find(".few").click(function () {

    });
    tileFrancSupport.find(".few").click(function () {

    });
    tileAdvocate.find(".few").click(function () {

    });
    tilePodcast.find(".few").click(function () {

    });
    tileBooks.find(".few").click(function () {

    });
}
(function ($) {
    tileHide();
    
    $(window).on('resize', function () {
        let resizer = $(window).width();
    });
    fewButton();
}(jQuery));