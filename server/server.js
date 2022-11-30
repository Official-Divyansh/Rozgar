const express=require('express')
const app=express()
const cors=require('cors')
const path=require('path')

require('dotenv').config()

const InitializeDB=require("./Config/Database/DB")
const ReisterRouter=require("./Routes/Register/register.route")
const LoginController=require("./Routes/Login/login.route")
const forgotpass = require('./Routes/Forgot-password/forgotpassword')
const updateUser=require("./Routes/UpdateUser/updateuser")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('views', path.join(__dirname))
app.set('view engine', 'handlebars') 

//routes

app.use("/api/v1/user",ReisterRouter)
app.use("/api/v1/user",LoginController)
app.use("/api/v1/user",forgotpass)
app.use("/api/v1/user",updateUser)

const PORT=process.env.PORT || 7000

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,"client","build")))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.join(__dirname,"client","build","index.html"))
//     })
// }

app.get("/",(req,res)=>{
    res.json("server started")
})
async function startServer(){
    try{
        InitializeDB()
       app.listen(PORT,()=>{
        console.log(`server is listening on ${PORT}...`)
       })
    }catch(err){
        console.log(err)
    }
}

startServer()