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
const getProjectByUser= async (req,res)=>{
  try{
    const {email}=req.body;
    const projectUser=await Project.find({email})
    res.status(200).json({projectUser})
  }
  catch(error){
    res.status(400).json({error})
  }
}

module.exports = {
  createProject,
  getProjects,
  getProjectByUser
};
