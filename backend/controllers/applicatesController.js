const Project = require('../models/Project');
const User = require('../models/User');
const Applied = require('../models/apply')

const apply = async (req, res) => {
  const { projectId, applyEmail } = req.body;

  try {
    const applied=await Applied.findOne({_id:projectId})
    // if not applied already
    if(applied){

      const project = await Project.findById({_id:projectId}); // Use findById instead of find
      // project with passed is not present
      if (!project) {
          return res.status(404).json({ error: 'Project not found' });
         }

        const { email } = project;
        // Create user's application in apply table
        const posterEmail = email;
        const application = await Applied.create({ posterEmail, applyEmail, projectId });
        // new instance create in database apply table
        res.status(201).json({ message: 'Applied to the project successfully', project, application });
      }
    else {
      res.status(200).json({message:'already applied'})
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};

const getApplications= async (req,res)=>{
  try{
  const applications=await Applied.find();
  res.status(200).json({applications})
}
  catch(error){
    res.status(500).json({error})
  }
}

module.exports = {
  apply,
  getApplications
};
