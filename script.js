// script.js

window.onscroll = function () {
    var header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

// Toggle Dark Mode
const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// Scroll smoothly to the portfolio section when the "View My Work" button is clicked
const ctaButton = document.querySelector('.cta-button');
const portfolioSection = document.querySelector('#portfolio');

ctaButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
});
// ---------------------------------------------------------------------------------------------------


document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    const formData = new FormData(this); // Collect form data

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Your message has been sent successfully!');
            this.reset(); // Reset the form fields
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    }
});