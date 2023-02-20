const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const viewImageBtn = document.querySelector('.view-image-btn');

// Add event listener to parent element
document.addEventListener('touchstart', function(event) {
  // Check if the target element is the view image button
  if (event.target.closest('.view-image-btn')) {
    // Get the source of the image
    const imageUrl = document.querySelector('.heroimage img').getAttribute('src');
    console.log(`Image URL: ${imageUrl}`);

    // Set the source of the lightbox image
    lightboxImage.setAttribute('src', imageUrl);
  
    // Show the lightbox
    lightbox.style.display = 'block';
  }

  // Check if the target element is the close button
  if (event.target.closest('#close-btn')) {
    // Hide the lightbox
    lightbox.style.display = 'none';
  }
}, { passive: true });


var imagesCount = 15; // Replace with the actual number of images in the slideshow
var progressBar = document.querySelector('.progress-bar');
var progress = 0;

function updateProgress() {
  progress += 100 / imagesCount;
  progressBar.style.width = progress + '%';
}

var prevButton = document.querySelector('.prev-button');
prevButton.addEventListener('click', updateProgress);

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', updateProgress);