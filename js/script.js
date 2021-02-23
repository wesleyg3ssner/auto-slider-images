let imageCurrentIndex = 0,
    images = document.querySelectorAll('img'),
    maxIndex = images.length,
    time = 2000;


function nextImage() {

    images[imageCurrentIndex].classList.remove('selected')

    imageCurrentIndex++

    if (imageCurrentIndex >= maxIndex) {
        imageCurrentIndex = 0
    }

    images[imageCurrentIndex].classList.add('selected')
}


function start() {
    setInterval(() => {
        nextImage()
    }, time)
}



window.addEventListener('load', start);