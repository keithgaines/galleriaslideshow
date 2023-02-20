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