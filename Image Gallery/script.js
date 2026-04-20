const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

// Close
document.querySelector(".close").onclick = () => {
  lightbox.style.display = "none";
};

// Next
document.getElementById("next").onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
};

// Prev
document.getElementById("prev").onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
};

