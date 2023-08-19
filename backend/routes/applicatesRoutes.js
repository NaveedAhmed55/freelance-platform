const express = require('express');
const applicates = require('../controllers/applicatesController');

// Create an instance of the Express Router
const router = express.Router();

// Define the route for applying to a project using a POST request
router.post('/page', applicates.apply);
router.get('/page', applicates.getApplications);

// Export the router to be used in your main application file
module.exports = router;
