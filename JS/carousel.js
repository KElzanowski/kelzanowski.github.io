const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children); /* Creates an array from the children list nodes of the unordered list parent. */
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideWidth = slides[0].offsetWidth;

// Arrange slides next to each other.

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'; /* The width of the image times by the position in pixels. */
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide'); /* Removes current slide class and adds it to the next sibling. */
}

// Removing the previous button on the first slide, and next button on the last slide.

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// Click left arrow, move slideshow to the left.

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide)
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

// Click right arrow, move slideshow to the right.

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide)
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})