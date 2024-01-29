document.addEventListener('DOMContentLoaded', function() {
    var scrollToContactButtons = document.querySelectorAll('.scrollToContact');
  
    scrollToContactButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  