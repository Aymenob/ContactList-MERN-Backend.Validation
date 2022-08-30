var mongoose=require("mongoose")
var person=mongoose.Schema({
    Lastname:String,
    Firstname:String,
    Age:Number,
    Email:String
})
module.exports=mongoose.model("Users",person)