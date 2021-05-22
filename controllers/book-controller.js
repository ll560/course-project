const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports ={
book_detail_get: (request, response) => {
    const id = request.params.id;
    const foundBook = data.find( comic => comic._id === String(id));
    response.render('pages/book',{book: foundBook});

}
}