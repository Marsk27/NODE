const mongoose=require("mongoose");

const Schema=mongoose.Schema;
//Schema:variable
//mongoose.Schema:will help us create the schema object==> will create the document of type users in mongodb.

const userSchema=new Schema ({
    name:{
        type:String,
        required: true,
    },
        email:{
            type:String,
            requred:true,
            unique:true,//will not allow the duplicate one.
        },
        password:{
            type:String,
            unique:true,
        },
        avatar:{
            type:String,
            required:false,
        },
        date:{
            type:Date,
            default:Date.now,  //today's date wrt server.==GMT 0 T0 
        },
});

//Schema specification: 

module.exports= mongoose.model("user",userSchema);
