// JavaScript for the image slider
let currentSlide = 0;
const slides = document.querySelectorAll('#image-slider img');

function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// JavaScript for form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can add additional validation checks for email format, etc.

    // Send the form data to your server using AJAX or fetch
    // Example: fetch('your-server-url', { method: 'POST', body: new FormData(contactForm) })
    // Handle the response accordingly
});


// JavaScript for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
