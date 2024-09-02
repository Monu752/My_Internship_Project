document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    const shareRoom = document.querySelector('.shareyr');
    const rentRoom = document.querySelector('.rentaroom');
    const basicInfo = document.querySelector('.basicinfo');
  
    // Add event listeners to toggle visibility
    shareRoom.addEventListener('click', function() {
      basicInfo.classList.toggle('show');
    });
  
    rentRoom.addEventListener('click', function() {
      basicInfo.classList.toggle('show');
    });
  });
  

  // JavaScript code for your website

// Example function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission

  // Your form handling logic here
  
  // For example, you can retrieve form data
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');

  // Perform any necessary actions, such as sending data to a server
  
  // Redirect to another page after form submission
  window.location.href = 'success.html';
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmission);
});
