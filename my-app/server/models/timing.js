const mongoose =require('mongoose')
mongoose.Promise = require('bluebird')
bcrypt=require('bcrypt-nodejs');    
const schema=mongoose.Schema;

const timeModel= new schema({
      fajardatetime:String,
      zehordateTime:String,
      asardateTime:String,
      magribdateTime:String,
      ishadateTime:String,
      masjid_id:String,   
})

module.exports=mongoose.model('timeModel',timeModel); 
