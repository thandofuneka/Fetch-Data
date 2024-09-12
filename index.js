// This function will be displaying the data
function displayData(data) {
    // The container for display the data
    const container = document.getElementById('data-container');
    
    // Clear any previous content
    container.innerHTML = '';
  
    // Display the data
    container.textContent = JSON.stringify(data, null, 5); // Convert data to a string with nice formatting
  }
  
  // Fetch data from the URL
  fetch('https://jsonplaceholder.typicode.com/posts') //URL
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Convert response to JSON
    })
    .then(data => {
      displayData(data); // Call the function to display the data
    })
    .catch(error => {
      // Handle any errors that occur during the fetch
      console.error('There was a problem with the fetch operation:', error);
      const container = document.getElementById('data-container');
      container.textContent = 'Failed to load data';
    });
  