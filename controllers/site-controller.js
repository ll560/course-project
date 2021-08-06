const { response } = require('express');
const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports = {
all: (request, response) => {
    response.render('pages/index',{data: data}); //the first data is the one carried over to ejs
},
about_get: (request, response) => {
    response.render('pages/about');
},
login_get:(request, response) => {
    response.render('pages/login');
},
login_post:(request, reponse) => {
    const username = request.body.username;
    const password = request.body.password;
    console.log(`password entered is ${password}`);
    User.findOne({username: username}, (error, foundUser) =>{
        if (error){
            console.log(`the login error is ${error}`);
        } else {
            if (userfound) {
                console.log(`username was matched: ${foundUser.username}`)
            }
        }
    })
},
register_get:(request, response) => {
    response.render('pages/register')
},

register_post:(request, response) => {
    const newUser = new User({
        username: request.body.username,
        password: request.body.password
    })
    newUser.save();
    response.redirect('pages/index')
}
}