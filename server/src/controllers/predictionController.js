const runPredictScript = require("../ML_Part/predict_by_script");

exports.createPrediction = async (req, res) => {
    const  data = req.body;
 
    const inputJson = JSON.stringify(data); // Replace with your input data

    runPredictScript(inputJson,(err,result)=>{
        if(err){
            console.error("The error is",err);
        }
        else{
            console.log("The result is",result);
            res.send(result);
        }
    });
  
    console.log("This is sent by postman",data);
    
}