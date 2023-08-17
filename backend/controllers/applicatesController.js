const Project = require('../models/Project');
const User = require('../models/User');
const Applied = require('../models/apply')

const apply = async (req, res) => {
  const { projectId, applyEmail } = req.body;

  try {
    const project = await Project.findById({_id:projectId}); // Use findById instead of find

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const { email } = project;

    // Create user's application in apply table
    const posterEmail = email;
    const application = await Applied.create({ posterEmail, applyEmail, projectId });

    res.status(200).json({ message: 'Applied to the project successfully', project, application });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  apply,
};
