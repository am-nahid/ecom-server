const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET_KEY

const auth = (req,res)=>{
    const data = req.headers['authorization']
    const token = data.split(" ")[1]

    const verify = jwt.verify(token,secretKey)
    if(verify){
        console.log("verified");
        return next()
    }
    return res.send({msg:"user not authorized"})
}