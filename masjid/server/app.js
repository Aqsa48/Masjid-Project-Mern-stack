const express = require('express')
    bodyParser = require('body-parser')
    cors = require('cors')
    mongoose = require('mongoose')
    passport = require('passport')
    cookieParser = require('cookie-parser')
    session = require('express-session')
    multer = require('multer')
    fs = require('fs');

const app = express();

const passportConf = require('./config/passport');
const secret = require('./config/secret');

const User = require('./models/user'); 
const Namaztiming = require('./models/timing'); 

const Port = process.env.PORT || secret.port;


// DATABASE CONNECTION
mongoose.connect(secret.database,function(err){
    if(err){console.log(err);}
    else{console.log('DATABASE CONNECTED')}
})

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(cookieParser())
app.use(session({
    secret: 'anything',
    resave: true,
    saveUninitialized: false
    // store: new MongoStore({url:secret.database})
}))
app.use(passport.initialize())
app.use(passport.session())


let userData;

app.post('/login', passport.authenticate('user',{failureRedirect:'/login'}),(req,res)=>{
    console.log('Login Encountered')
    userData=req.user
    res.json({
            "path":"/timing",
            "userData":req.user
        });
}); 
app.post('/signup',(req,res,next)=>{
    let user = new User();
    console.log(req.body);
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.masjidname = req.body.masjidname;
    user.masjidlocation = req.body.masjidlocation;

    user.save((err,user) => {
        if(err){console.error("Error: ", err)}
        else{
            res.json({"path":"/login"});
        }
    })
})

app.post('/Namaztiming',(req,res,next)=>{
    let time = new Namaztiming();
    time.fajardatetime = req.body. fajardatetime
 
    time.masjid_id=req.body.masjid_id

    time.zehordateTime=req.body.zehordateTime

    time.asardateTime=req.body.asardateTime

    time.magribdateTime=req.body.magribdateTime

    time.ishadateTime=req.body.ishadateTime


    time.save((err,session) => {
        if(err){console.error("Error: ", err)}
        else{
            res.json({"confirmation":"Yes" , "time":time
          })

        }  
    })
})

app.get('/User',(req,res)=>{
       console.log(userData);
        res.send(userData);
})

app.get('/getAllUsers',(req,res)=>{
    User.find({},function(err,user){
        res.send(user);
   })
})
app.get('/getTime',(req,res)=>{
    Namaztiming.find({},function(err,user){
        res.send(user);
   })
})


 
server=app.listen(9000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server connected to http://localhost:9000`);
    }
});

