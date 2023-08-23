const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
// const { getUserByEmail, savedUsers } = require('../controller/userDataBase');
const User = require('./../schemas.js/userSchema')


dotenv.config()

const secretKey = process.env.JWT_SECRET_KEY || "random@str12#"
const refreshSecretKey =  process.env.JWT_REFRESH_KEY || 'refrrandom@str12#'


const register = async (req, res) => {
    try{
    const data = req.body;
  
    const { name, email,phone, password} = data;
    // const user = await getUserByEmail(email);
    const user = await User.findOne({email:email})
  //  console.log(user, "user");
  
    if (user != null) {
      return res.status(409).send({
        message: `user with email ${email} already exists`,
        statusCode: "Not Ok",
      });
    }
  
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
 
    const token = jwt.sign({ usedId:email }, secretKey, {
      expiresIn: "20M",
    });
    const refreshToken = jwt.sign({ usedId:email }, refreshSecretKey, {
      expiresIn: "20M",
    });
  
    const userInfo = {
      // _id: user._id,
      name: name,
      phone:phone,
      email: email,
      password: hashPassword,
      // confPassword: hashConfPassword,
      token: token,
      refreshToken: refreshToken,
    };
  
const newUser = await User.create(userInfo)
    // await savedUsers(userInfo);

    // const newUser = await getUserByEmail(email);
    let _id = newUser._id || new Date().getTime().toString()
  
    res.send({
      message: "registration successfull",
      token: token,
      refreshToken: refreshToken,
      name:name,
      _id:_id,
      statusCode: "OK",
    });
  
  }catch(err){
  console.log(err);
  res.status(500).send({
    message:"Internal server error",
    statusCode: 500
  })
  }
  };

  
const login= async(req,res)=>{
    const data = req.body;
   const {email,password} = data
  //  console.log(data);
   
 try{
  // const user = await getUserByEmail(email);
  const user = await User.findOne({email:email})

   if(!user){
     return res.status(404).send({
       message: `user not found`,
       statusCode: "Not Ok",
     });
   }
 
   const hashedPassword = user.password
   // const confhashedPassword = user.confPassword
   const passwordMatch = await bcrypt.compare(password, hashedPassword)
   // console.log(passwordMatch);
   if(!passwordMatch){
     return res.status(401).send({
       message: "Incorrect password",
       statusCode: "Unauthorized"
     })
   }
   const token = jwt.sign({usedId:user.email}, secretKey,{expiresIn:3600})
   const refreshToken = jwt.sign({usedId:user.email}, refreshSecretKey,{expiresIn:"7d"})
   res.send({
     token: token,
     refreshToken: refreshToken,
     name:user.name,
     _id:user._id,
     statusCode: "OK",
   })
   // else{
   
   // }
 }catch(err){
   console.log(err);
   res.status(500).send({
     message:"Internal server error",
     statusCose: 500,
   })
 
 }
     
 }
 


  module.exports = {register, login}