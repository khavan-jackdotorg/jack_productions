let tileCont = $(".resource-tilebox");
let tileContBook = $(".resource-tilebox.book")
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
function fewButtonClick() {
    var resizer = $(window).width();
    //initial state of each line
    
    tileContBook.each(function () {
        //hide the elements that are not there
        $(this).children().slice(1).addClass("tile-hidden");
    });

    //media based sizing
    if (resizer < 768 ) {
        tileCont.each(function () {
            //hide the elements that are not there
            $(this).children().slice(1).addClass("tile-hidden");
            $(this).children().slice(0,0).removeClass("tile-hidden");
        });
        fewButton.click(function () { // show only the first three children of the colleciton list
            $(this).each(function () {
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(1).addClass("tile-hidden");
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 0).removeClass("tile-hidden");
            });
            $(this).addClass("button-selected");
            $(this).siblings().removeClass("button-selected");
            $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
        });
        console.log(768);

    } else if (resizer < 992 && resizer >= 768) {
        tileCont.each(function () {
            //hide the elements that are not there
            $(this).children().slice(2).addClass("tile-hidden");
            $(this).children().slice(0,1).removeClass("tile-hidden");
        });
        fewButton.click(function () { // show only the first three children of the colleciton list
            $(this).each(function () {
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(2).addClass("tile-hidden");
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 1).removeClass("tile-hidden");
            });
            $(this).addClass("button-selected");
            $(this).siblings().removeClass("button-selected");
            $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
        });
        console.log(992);

    } else if (resizer < 1440 && resizer >= 992) {
        tileCont.each(function () {
            //hide the elements that are not there
            $(this).children().slice(3).addClass("tile-hidden");
            $(this).children().slice(0,2).removeClass("tile-hidden");
        });
        fewButton.click(function () { // show only the first three children of the colleciton list
            $(this).each(function () {
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(3).addClass("tile-hidden");
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 2).removeClass("tile-hidden");
            });
            $(this).addClass("button-selected");
            $(this).siblings().removeClass("button-selected");
            $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
        });
        console.log(1440);
    } else if (resizer < 1920 && resizer >= 1440) {
        console.log("1440");
        tileCont.each(function () {
            //hide the elements that are not there
            $(this).children().slice(4).addClass("tile-hidden");
            $(this).children().slice(0,3).removeClass("tile-hidden");
        });
        fewButton.click(function () { // show only the first three children of the colleciton list
            $(this).each(function () {
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(4).addClass("tile-hidden");
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 3).removeClass("tile-hidden");
            });
            $(this).addClass("button-selected");
            $(this).siblings().removeClass("button-selected");
            $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
        });
        console.log(1920);
    } else {
        console.log("1920 large");
        tileCont.each(function () {
            //hide the elements that are not there
            $(this).children().slice(5).addClass("tile-hidden");
            $(this).children().slice(0,4).removeClass("tile-hidden");
        });
        fewButton.click(function () { // show only the first three children of the colleciton list
            $(this).each(function () {
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(5).addClass("tile-hidden");
                $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 4).removeClass("tile-hidden");
            });
            $(this).addClass("button-selected");
            $(this).siblings().removeClass("button-selected");
            $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
        });
    }

    // tilePrideSupport.find(".few").click(function () {

    // });
    // tileFrancSupport.find(".few").click(function () {

    // });
    // tileAdvocate.find(".few").click(function () {

    // });
    // tilePodcast.find(".few").click(function () {

    // });
    tileContBook.find(".few").click(function () {
        $(this).each(function () {
            $(this).parent().parent().parent().find(".resource-tilebox").children().slice(1).addClass("tile-hidden");
            $(this).parent().parent().parent().find(".resource-tilebox").children().slice(0, 1).removeClass("tile-hidden");
        });
        $(this).addClass("button-selected");
        $(this).siblings().removeClass("button-selected");
        $(this).parent().parent().parent().find(".resource-collection").removeClass("tile-hidden");
    });
}
(function ($) {
    tileHide();
    fewButtonClick();
    $(window).on('resize', function () {
        fewButtonClick();
    });
    
}(jQuery));