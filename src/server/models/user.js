var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
      name:{
        type:String,
        require:true
      },
      dob:{
        type:String,
        require:true
      },
      number:{
        type:Number,
        require:true
      },
      gender:{
        type:String,
        require:true
      },
      email:{
        type:String,
        require:true
      },
      password:{
        type:String,
        require:true
      },
      // token:{
      //   type:Array,
      //   require:true
      // }


});

var User = mongoose.model("user", UserSchema);
module.exports = { User };