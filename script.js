// SCROLL//

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


// //FORM VALIDATION//

// function validateForm() {
//   // Reset error messages
//   resetErrorMessages();

//   // Get form inputs
//   const nameInput = document.getElementById('nameInput');
//   const emailInput = document.getElementById('emailInput');
//   const messageInput = document.getElementById('messageInput');
//   const contactForm = document.getElementById('contactForm');

//   // Validate Name
//   if (nameInput.value.trim() === '') {
//       showError('nameEmptyError');
//       return;
//   }

//   // Validate Email
//   const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (emailInput.value.trim() === '') {
//       showError('emailFormatError');
//       return;
//   } else if (!emailFormat.test(emailInput.value.trim())) {
//       showError('emailFormatError');
//       return;
//   }

//   // Validate Message
//   if (messageInput.value.trim() === '') {
//       showError('messageEmptyError');
//       return;
//   }

//   // If all validations pass, you can submit the form
//   contactForm.submit();
// }

// function showError(errorId) {
//   document.getElementById(errorId).style.display = 'flex';
// }

// function resetErrorMessages() {
//   const errorMessages = document.getElementsByClassName('error_message');
//   for (const errorMessage of errorMessages) {
//       errorMessage.style.display = 'none';
//   }
// }

// const submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   validateForm();
// });



