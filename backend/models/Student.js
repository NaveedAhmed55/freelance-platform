const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true}
})