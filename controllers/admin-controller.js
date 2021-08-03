const { response } = require('express');
const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports = {
    all: (request, response) => {
        response.render('pages/admin', {data: data});
    },
    admin_new: (request, response) =>{
        response.render('pages/create');
    },
    admin_edit: (request, response) => {
        const id = request.params.id;
        const foundBook = data.find( comic => comic._id === String(id));
        response.render('pages/update', {book: foundBook});
}
}