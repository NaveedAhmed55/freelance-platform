const Project = require('../models/Project');

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    console.log("working")
    res.status(201).json({ project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
};

module.exports = {
  createProject,
  getProjects,
};
