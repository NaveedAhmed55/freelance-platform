const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success:true });
  } catch (error) {
    // Email is already registered, provide a custom error message
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      res.status(400).json({ error: 'Email is already registered.' });
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

const checkUser= async (req,res)=>{
  const {email,password}=req.body;
  try{
    const user=await User.findOne({email});
    if(password==user.password){
      res.status(200).json({email:user.email})
    }
    else {
      //unauthorized
      res.status(401);
    }
    
  }
  catch (error) {
    //unauthorized 
    return res.status(500).json({ error: 'An error occurred' });
  }

}
module.exports = {
  createUser,
  checkUser
};
