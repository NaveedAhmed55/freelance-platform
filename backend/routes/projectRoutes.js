const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/', projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/userproject',projectController.getProjectByUser)

module.exports = router;
