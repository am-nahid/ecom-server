// const User = require("../schemas.js/userSchema")


// const getUserByEmail=async (email)=>{

//     try{
//       const user = await User.findOne({email})
//       if(user){
//         return user
//       }else{
//         return null
//       }
//     }catch(err){
//     console.log(err, "Error getting user by email");
//     }
   
// }

//  const savedUsers = async (user)=>{

//     try{
//         const newUser = new User(user)
//         await newUser.save()
//     }catch(err){
//         console.log(err, " Error saving user");
//     }
// }

// module.exports= {savedUsers,getUserByEmail}