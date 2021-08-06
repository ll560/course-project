const mongoose = require('mongoose');

const {Schema} = mongoose;
const comicSchema = new Schema({
    title: String,
    author: String,
    publisher: String,
    genre: String,
    pages: Number,
    rating: Number,
    synopsis: String,
    image: String
}
);

const Comic = mongoose.model('Comic', comicSchema); /* the two arguemets: 1. the collection 2. the structure of the collection in the schema*/

//sample entry
const comicSample = new Comic({title: 'Fun House',
    author: 'Michael',
    publisher: 'new comic land',
    genre: 'fiction',
    pages: 5,
    rating: 5,
    synopsis: 'this is a great book',
    image: 'find out how to put in image'});
    
comicSample.save();

module.exports = Comic;