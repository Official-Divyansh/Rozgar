const express=require('express')
const nodemailer=require('nodemailer')
const hbs=require('nodemailer-express-handlebars')
const path=require('path')

function initiateMail(to,subject,text,html,otp,username){
var transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        type:"login",
        user:'troyjohnny068@gmail.com',
        pass:'zkfxyysbopwfketp'
    }
})

transporter.use('compile',hbs({
    viewEngine:{
        extName: ".handlebars",
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
    },
    viewPath:path.resolve('./views'),
    extName:".handlebars"
}))

var mailOptions={
    from:'troyjohnny068@gmail.com',
    to:to,
    cc:"troyjohnny068@gmail.com",
    subject:subject,
    template:html,
    context:{
        title:"Demo",
        text:text,
        otp,
        username:username.split('@')[0]
    }
}

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log("error"+error)
    }else{
        console.log("mail has been sent "+info.response)
    }
})

}

module.exports=initiateMail
