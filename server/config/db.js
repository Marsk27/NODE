const config= require("config");
const mongoose= require("mongoose");
//config lib will hepl us to load our configuration which are required in the aplication.
const db= "mongodb://localhost:27017/devConnector";

const connectDB = async() =>{
    //to connect to mongodb.
    try{
        console.log("before the connect method");
        await mongoose.connect(db,{});
        console.log("mongodb connected");
        //we will write the code where we may get an error.
    }
    catch(error){
        
        // we will handele the error:we will provide the solution to the occured error/problem.
        console.log(JSON.stringify(error));
    }};
//const:keyword:reserved word 
//it will not allow us to change the value of the variable.

module.exports= connectDB;
