const passport=require('passport')
    localStrategy=require('passport-local').Strategy
    bcrypt=require('bcrypt-nodejs')
    userModel=require('../models/user')
    secret = require('../config/secret');


    
// Passport local Strategy for user
//This strategy will search the user with username in databse, compare its password and return user data
passport.use('user',new localStrategy(function(username,password,done){
    userModel.findOne({username:username},function(err,user){
        if(err){
           return done(err);
        }
        if(!user){
            return done(null,false);
        }
        // if(!user.comparePassword(password)){
        //     return done(null,false);
        // }

        return done(null,user);
   }) 
}))

// Passport Serialization
passport.serializeUser(function(user,done){
    done(null,user._id);
})


// Passport Deserialization
//This will search the user in customerModel and adminModel
passport.deserializeUser(function(id,done){
    userModel.findById(id,function(err,user){
        if(err){
            return done(err);
        }
        // if(user){
            done(null,user);
        // }
    })
    
})

