// Function to scroll to the contact section
function scrollToContact() {
  // Get the contact section element
  const contactSection = document.getElementById('contact');

  // Scroll to the contact section
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Add click event listeners to your "Contact Me" buttons
const contactButtons = document.querySelectorAll('.scrollToContact');

contactButtons.forEach(button => {
  button.addEventListener('click', scrollToContact);
});
