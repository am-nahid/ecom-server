const mongoose = require("mongoose")
mongoose.set("strictQuery", true)


const atlasUrl = process.env.atlasUrl
 

async function connectToDatabase(){
    try{
        await mongoose.connect(atlasUrl)
        console.log("server connected with DataBase");
    }
    catch(err){
        console.log(err, "Error in making the connection with dataBase");
    }
}

module.exports = connectToDatabase