const mongoose=require('mongoose')

const maritalstatus=["Married","Single"]
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is a required Field"]
    },
    email:{
        type:String,
        required:[true,"Email is a Required Field"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is a Required Field"]
    },
    FirstName:{
        type:String,
        default:'NA' 
    },
    LastName:{
        type:String,
        default:'NA'
    },
    Address1:{
        type:String,
        default:'NA'
    },
    Address2:{
        type:String,
        default:'NA'
    },
    City:{
        type:String,
        default:'NA'
    },
    Region:{
        type:String,
        default:'NA'
    },
    Zipcode:{
        type:String,
        default:'NA'
    },
    Phone:{
        type:Number,
        default:123456789
    },
    DOB:{
        type:String,
        default:'NA'
    },
    Education:[{
        phd:{
            type:String,
            defauld:"NA"
        },
        PostGraduation:{
            type:String,
            defauld:"NA"
        },
        Graduation:{
            type:String,
            defauld:"NA"
        },
        Intermediate:{
            type:String,
            defauld:"NA"
        },
        Metric:{
            type:String,
            defauld:"NA"
        }
    }],
    Certifications:{
         type:Array
    },
    Role:{
        type:String,
        default:'NA'
    },
    DesiredJobType:{
        type:String,
        default:'NA'
    },
    DesiredEmployment:{
        type:String,
        default:'NA'
    },
    ExpectedCTC:{
        type:String,
        default:'NA'
    },
    PreferedShift:{
        type:String,
        enum:{
            values:['Day','Night','Flexible'],
            message:'{value} is not Supported'
        } 
    },
    PreferredLocation:{
        type:String,
        default:'NA'
    },
    Gender:{
        type:String,
        default:'NA'
    },
    MaritalStatus:{
        type:String,
        enum:maritalstatus
    },
    Hometown:{
        type:String,
        default:'NA'
    },
    Experience:{
        type:String,
        default:'NA'
    },
    CurrentlyWorking:{
        type:Boolean,
        default:false
    },
    WhereWorking:{
        type:String,
        default:'NA'
    },
    CurrentCtc:{
        type:String,
        default:'NA'
    },
    Resume:{
        type:String,
        default:'NA'
    },
    skills:{
        type:Array
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",UserSchema)