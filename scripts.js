function buyPaschalCoin() {
    alert("still learning backend boss i only make use of html css and javascript ");
    // Implement the logic to redirect to the purchase page or initiate the purchase process
}

// Smooth scrolling for navigation link
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('#hero').classList.toggle('dark-mode');
    document.querySelector('#features').classList.toggle('dark-mode');
    document.querySelector('#testimonials').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
}


function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
// FAQ accordion
const acc = document.querySelectorAll('.accordion');
acc.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});
// Reveal on scroll
const revealItems = document.querySelectorAll('.reveal-item');

function reveal() {
    revealItems.forEach(item => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', reveal);
