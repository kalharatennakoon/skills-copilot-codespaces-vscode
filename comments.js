// Create web server
// Create a web server using the Express framework to render the comments page.

// Import the express module
const express = require('express');

// Create an instance of the express server
const app = express();

// Define a route for the comments page
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the code and visit http://localhost:3000/comments in your browser to see the comments page.
