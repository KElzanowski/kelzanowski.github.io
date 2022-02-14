var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

$(window).scroll(function(){
    if ($(window).width() > 600) {
        $("#Logo").css("opacity", 1 - $(window).scrollTop() / 1750);
}});

$(window).scroll(function(){
    if ($(window).width() <= 600) {
        $("#Logo").css("opacity", 1 - $(window).scrollTop() / 2000);
}});

document.oncontextmenu = function() { 
    return false; 
}