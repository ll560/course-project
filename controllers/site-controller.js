const { response } = require('express');
const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports = {
all: (request, response) => {
    response.redirect('pages/index',{data: data}); //the first data is the one carried over to ejs
},
about_get: (request, response) => {
    response.render('pages/about');
},
login_get:(request, response) => {
    response.render('pages/login');
}
}