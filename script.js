document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get the entered name and email values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Display the submitted data
    var submittedData = document.getElementById('submittedData');
    submittedData.innerHTML = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`;
  
    // Reset the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  });