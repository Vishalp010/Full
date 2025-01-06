/* eslint-disable @typescript-eslint/no-unused-vars */

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username :{
    type: String,
    required : [true, 'Username is required'],
    unique : true,
  },
  email :{
    type: String,
    required : [true, 'email is required'],
    unique : true,
  },
  password :{
    type: String,
    required : [true, 'password is required'],
  },
  isAdmin :{
    type: Boolean,
    default : false,
  },
  isVerified:{
    type: Boolean,
    default :false,
  },
  forgotPasswordToken : String, 
  forgotPasswordTokenExpiry : Date, 
  verifyToken : String,
  verifyTokenExpiry: Date,
})

// const User = mongoose.models.users || mongoose.model('users',userSchema)
// const User = mongoose.models.User || mongoose.model('users',userSchema)
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User