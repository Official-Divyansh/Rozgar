const userModel=require("../../../Models/User.model")

async function UpdateUserController(req,res){
    try{
        if(req.user){
              const UpdateData=await userModel.findByIdAndUpdate({_id:req.user._id},{
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                Address1:req.body.Address1,
                Address2:req.body.Address2,
                City:req.body.City,
                Region:req.body.Region,
                Zipcode:req.body.Zipcode,
                Phone:req.body.Phone,
                DOB:req.body.DOB,
                Education:{ 
                        phd:req.body.phd,
                        PostGraduation:req.body.PostGraduation,
                        Graduation:req.body.Graduation,
                        Intermediate:req.body.Intermediate,
                        Metric:req.body.Metric
                    
                },
                Certifications:req.body.Certifications,
                Role:req.body.Role,
                DesiredJobType:req.body.DesiredJobType,
                DesiredEmployment:req.body.DesiredEmployment,
                ExpectedCTC:req.body.ExpectedCTC,
                PreferedShift:req.body.PreferedShift,
                PreferredLocation:req.body.PreferredLocation,
                Gender:req.body.Gender,
                MaritalStatus:req.body.MaritalStatus,
                Hometown:req.body.Hometown,
                Experience:req.body.Experience,
                CurrentlyWorking:req.body.CurrentlyWorking,
                WhereWorking:req.body.WhereWorking,
                CurrentCtc:req.body.CurrentCtc,
                Resume:req.body.Resume,
                skills:req.body.skills
              },{
                runValidators:true
              })
              if(UpdateData){
                res.status(200).send({msg:"SuccessFully Updated the Profile",result:true})
              }
        }else{
            res.status(404).json({
                result:false,
                msg:"Bad Request"
            })
        }
    }catch(err){
        res.status(400).send({
            msg:err.message,
            result:false
        })
    }
}


module.exports={
    UpdateUserController
}