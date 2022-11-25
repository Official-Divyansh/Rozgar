var mongoose = require("mongoose")

var otpVerify = new mongoose.Schema({
email :  {
            type: String,
            required: true,
            unique:true
         },
otp   :  {
            type: String,
            required: true,
         },
dueTime: {
            type: String,
            required :true
         },
});

module.exports= mongoose.model("otpVerify",otpVerify)