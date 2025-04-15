(function() {
    
})
const galleries = [
    [
        "img/01.jpg", 
        "img/02.jpg", 
        "img/03.jpg", 
        "img/04.jpg", 
        "img/05.jpg",
        "img/06.jpg",
        "img/07.jpg",
        "img/08.jpg",
        "img/09.jpg",
        "img/10.jpg",
    ]
];

let currentGallery = 0;
let currentSlide = 0;

function openLightbox(galleryIndex, slideIndex) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    currentGallery = galleryIndex;
    currentSlide = slideIndex;
    
    lightboxImg.src = galleries[galleryIndex][slideIndex];
    lightbox.style.display = 'block';
    
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeSlide(direction) {
    currentSlide += direction;
    const galleryLength = galleries[currentGallery].length;
    
    // Loop around if we reach the end
    if (currentSlide >= galleryLength) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = galleryLength - 1;
    }
    
    document.getElementById('lightbox-img').src = galleries[currentGallery][currentSlide];
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    }
});
