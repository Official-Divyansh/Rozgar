const jwt=require('jsonwebtoken')

const CreateToken=(payload)=>{
    const token=jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_LIFE
    });

    return token;
}

const verifyJwt=(token)=>{
    jwt.verify(token,process.env.JWT_SECRET)
}

module.exports={
     CreateToken,
     verifyJwt
}