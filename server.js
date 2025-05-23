require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const connectToDB = require('./database/db'); // Import the MongoDB connection function
const invoiceRoutes = require('./routes/invoice-routes'); // Import your routes (adjust path as needed)
const emailRoutes = require('./routes/email-routes');
const cors = require('cors');


// Create an instance of the Express app
const app = express();

// Set the port from environment variable or fallback to 4000
const PORT = process.env.PORT || 5000;


app.use(cors());
// Middleware to parse incoming JSON data
app.use(express.json());

// Use invoice routes
app.use('/api/invoices', invoiceRoutes);
app.use('/api/email', emailRoutes);

// Connect to MongoDB and start the server
connectToDB();

// Start the Express server after successful DB connection
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
