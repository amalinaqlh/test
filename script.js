/* ================= SEARCH BAR ================= */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      let q = this.value.toLowerCase();
      if (q.includes("bio")) location.href = "biodata.html";
      else if (q.includes("experience")) location.href = "experience.html";
      else if (q.includes("education")) location.href = "education.html";
      else if (q.includes("family")) location.href = "family.html";
      else if (q.includes("gallery")) location.href = "gallery.html";
      else if (q.includes("contact")) location.href = "contact.html";
      else alert("Page not found");
    }
  });
}

/* ================= BEAR EYES ================= */
const bear = document.getElementById("bear");
const leftPupil = document.querySelector("#leftEye .pupil");
const rightPupil = document.querySelector("#rightEye .pupil");

if (bear && leftPupil && rightPupil) {
  document.addEventListener("mousemove", (e) => {
    const rect = bear.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = 5;

    const angle = Math.atan2(dy, dx);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    leftPupil.style.transform = `translate(${x}px, ${y}px)`;
    rightPupil.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ================= BACKGROUND BUNGA ================= */
document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById('toggleBunga');
  const bgBunga = document.getElementById('bg-bunga');
  const clickSound = document.getElementById('clickSound');

  toggleBtn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    bgBunga.classList.toggle('active');
  });

});

let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let timer; // untuk autoplay

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
  clearTimeout(timer); // reset autoplay
  showSlides(slideIndex += n);
  timer = setTimeout(autoShowSlides, 5000); // autoplay kembali
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
  timer = setTimeout(autoShowSlides, 5000);
}

function autoShowSlides() {
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  showSlides(slideIndex);
  timer = setTimeout(autoShowSlides, 5000); // tukar setiap 5 saat
}

// initialize
showSlides(slideIndex = 1);
timer = setTimeout(autoShowSlides, 5000);

function showGallery(category) {
  // hide semua big gallery
  const bigGalleries = document.querySelectorAll('.big-gallery');
  bigGalleries.forEach(g => g.style.display = 'none');

  // hide 4 kategori awal
  document.querySelector('.category-only').style.display = 'none';
  document.querySelector('.choose-title').style.display = 'none';

  // show big gallery yang dipilih
  const selected = document.querySelector(`.big-gallery.${category}`);
  if (selected) selected.style.display = 'flex';
}

function backToMain() {
  // hide semua big gallery
  const bigGalleries = document.querySelectorAll('.big-gallery');
  bigGalleries.forEach(g => g.style.display = 'none');

  // show category awal
  document.querySelector('.category-only').style.display = 'flex';
  document.querySelector('.choose-title').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        // Ambil values
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const state = document.getElementById('state').value;
        const message = document.getElementById('subject').value;

        // Buka email client
        const emailTo = "youremail@example.com"; // tukar ke email awak
        const subject = encodeURIComponent(`Message from ${fname} ${lname}`);
        const body = encodeURIComponent(`Name: ${fname} ${lname}\nState: ${state}\n\nMessage:\n${message}`);

        window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

        form.reset();
    });

    // Copyable email/phone
    document.querySelectorAll('.copyable').forEach(item => {
        item.addEventListener('click', function(){
            const text = this.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(()=>{ alert(`Copied: ${text}`); });
        });
    });

});

