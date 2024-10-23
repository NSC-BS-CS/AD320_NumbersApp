document.getElementById('numberForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally
  
    const number = document.getElementById('number').value;
    const resultDiv = document.getElementById('result');
  
    // Make an AJAX request using Fetch API
    fetch('/get-number-fact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `number=${encodeURIComponent(number)}`,
    })
      .then(response => response.text())
      .then(data => {
        // Display the result in the resultDiv
        resultDiv.innerHTML = `<p>${data}</p>`;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p style="color: red;">An error occurred: ${error}</p>`;
      });
  });
  