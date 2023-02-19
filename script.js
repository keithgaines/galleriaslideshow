const slideshowImages = document.querySelectorAll('.heroimage img');
let currentImageIndex = 0;

function showImage(index) {
  slideshowImages[currentImageIndex].classList.remove('active');
  currentImageIndex = index;
  slideshowImages[currentImageIndex].classList.add('active');
}

document.querySelector('.slideshow-control.prev').addEventListener('click', () => {
  const index = (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
  showImage(index);
});

document.querySelector('.slideshow-control.next').addEventListener('click', () => {
  const index = (currentImageIndex + 1) % slideshowImages.length;
  showImage(index);
});

slideshowImages[currentImageIndex].classList.add('active');


// JavaScript code
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');
const viewImageBtn = document.querySelector('.view-image-btn');

viewImageBtn.addEventListener('click', () => {
  // Get the source of the image
  const imageUrl = document.querySelector('.heroimage img').getAttribute('src');
  console.log(`Image URL: ${imageUrl}`);

  // Set the source of the lightbox image
  lightboxImage.setAttribute('src', imageUrl);
  
  // Show the lightbox
  lightbox.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  // Hide the lightbox
  lightbox.style.display = 'none';
});
