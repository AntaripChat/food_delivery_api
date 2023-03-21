const helpDetails = (req,res) =>{
    return res.status(200).send({
        message:"Successfully Hitting the API",
        success:true,
        data:{
            contact:"+91 XXXXXXXXXX",
        }
    });
};


module.exports = {
    helpDetails
}