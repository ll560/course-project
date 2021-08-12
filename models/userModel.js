const mongoose = require('mongoose');
const passport = require('passport');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type:String,
    },
    password:{
        type:String,
    }
});

const user = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL:"http://www.example.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb){
    User.findOrCreate({googleID: profile.id}, function(err, user){
        return cb(err, user);
});
}
));

module.exports = User;