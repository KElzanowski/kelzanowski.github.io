var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$(window).scroll(function(){
    if ($(window).width() > 600) {
        $("#Logo").css("opacity", 1 - $(window).scrollTop() / 9250);
}});

$(window).scroll(function(){
    if ($(window).width() <= 600) {
        $("#Logo").css("opacity", 1 - $(window).scrollTop() / 8250);
}});
