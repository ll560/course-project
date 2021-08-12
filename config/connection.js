const mongoose = require('mongoose');
const { deserializeUser, use } = require('passport');
const passport = require('passport');


mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=> {
        if (err){
            console.log('Error with MongoDB connection');
        }else {
            console.log('Successful connection with MongoDB!!');
        }
    });

let GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:"http://www.example.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb){
    User.findOrCreate({googleID: profile.id}, function(err, user){
        return cb(err, user);
    });
}) );


/*another way to connect to mongodb  when it is running on the local computer
mongoose.connect('mongodb://localhost:27017/carolsBookstore', (error) => {
    if (err) {
        console.log('Error with mongodb connectivity')
    } else{
        console.log('Successful connection with server ')
    }
})



*/