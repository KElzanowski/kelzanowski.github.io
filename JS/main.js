var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$(window).scroll(function(){
    if ($(window).width() > 600) {
        $("#Logo").css("opacity", 1 - $(window).scrollTop() / 3500);
}});

$(window).scroll(function(){
    if ($(window).width() <= 600) {
        $("#Logo").css("opacity", 1 - $(window).scrollTop() / 6400);
}});

const profilePic = document.getElementById('Profile_Picture');

// Add both mouseenter (for desktop) and touchstart (for mobile) events
function triggerBounce() {
    profilePic.style.animation = 'bounce 1.15s ease';
}

// Remove animation after it completes, so it can be re-triggered
function removeBounce() {
    profilePic.style.animation = '';
}

// Trigger bounce on hover (desktop) or tap (mobile)
profilePic.addEventListener('mouseenter', triggerBounce);
profilePic.addEventListener('click', triggerBounce); // For mobile tap
profilePic.addEventListener('touchstart', triggerBounce); // For mobile touch

// Listen for the end of the animation to reset it
profilePic.addEventListener('animationend', removeBounce);

document.addEventListener('touchstart', function() {
    // Remove hover classes on touch devices
    try {
        const hoveredElements = document.querySelectorAll(':hover');
        hoveredElements.forEach(el => el.classList.remove('hover'));
    } catch (e) {
        // If :hover is unsupported, this will simply be ignored
    }
}, { passive: true });