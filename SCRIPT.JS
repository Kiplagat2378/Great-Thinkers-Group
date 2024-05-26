// JavaScript code can be added here for interaction or additional functionality
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add form validation or submit functionality here
    alert('Sign up button clicked!');
});

document.getElementById('emailLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of following the link
  window.location.href = 'mailto:greatthinkersgroup@gmail.com.com'; // Redirect to email client
});

document.getElementById('phoneLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of following the link
  window.location.href = 'tel:+254-715-696-391'; // Make a phone call
});
