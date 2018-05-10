// Variables
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
const opacity = 0.6;
imgs[0].style.opacity = opacity;



// Functions

function imgClick(e) {

    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    // Change the current Img to the source of clicked image
    current.src = e.target.src;

    // Add fadIn class
    current.classList.add("fade-in");

    // Remove the class with a timeout!
    setTimeout(() => current.classList.remove("fade-in"), 500);

    // CHange the opacity to var opacity
    e.target.style.opacity = opacity;

}

// EventListeners
imgs.forEach(img => img.addEventListener('click', imgClick));