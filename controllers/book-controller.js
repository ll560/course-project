const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports ={
book_detail_get: (request, response) => {
    const id = request.params.id;
    const foundBook = data.find( comic => comic._id === String(id));
    response.render('pages/book',{book: foundBook});

},
book_create: (request, response) => {
    //comic model
    const newComic = new Comic({
        title: request.body.title,
        author: request.body.author,
        publish: request.body.publish,
        genre: request.body.genre,
        pages: request.body.pages,
        rating: request.body.rating,
        synopsis: request.body.synopsis,
        image:request.body.image
    });
    newComic.save();
    response.redirect('/admin-console');
}

}