$(document).ready(function () {
    $(".dropdown").mouseenter(function () {
        $(this).children('.dropdown-menu').stop().slideDown();
    }).mouseleave(function () {
        $(this).children('.dropdown-menu').stop().slideUp();
    });
});
