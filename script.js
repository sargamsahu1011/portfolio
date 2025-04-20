
// Smooth Scrolling for Navigation
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust for navbar height
      behavior: 'smooth'
    });
  });
});

// Contact Form Submission (Basic Example)
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const message = document.querySelector('[name="message"]').value;

  if (name && email && message) {
    alert('Thank you for reaching out, ' + name + '! Your message has been sent.');
    // Reset form
    contactForm.reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});
