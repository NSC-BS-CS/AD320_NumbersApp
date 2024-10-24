let interactionCount = 0;

// Function to change background color to demonstrate user interaction while fetching
document.getElementById('changeColorButton').addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
  interactionCount++;
  document.getElementById('interactionCount').textContent = interactionCount;
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('numberForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting traditionally

  const number = document.getElementById('number').value;
  const resultDiv = document.getElementById('result');

  // Show loading message while fetching
  resultDiv.innerHTML = `<p>Loading...</p>`;

  // Simulate a delay using setTimeout to demonstrate async behavior
  setTimeout(() => {
    // Make an AJAX request using Fetch API after delay
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
  }, 3000); // 3-second timeout to simulate slow response
});
