const mongoose=require('mongoose')

var URI=process.env.MONGO_URI
async function InitializeDB(){
    try{
       const connection=await mongoose.connect(URI)
       if(connection){
        console.log(`Database is connected to Host ${connection.connection.host}`)
       }
    }catch(err){
        console.log(err)
    }
}

module.exports=InitializeDB