const mongoose = require('mongoose');

const {Schema} = mongoose;
const comicSchema = new Schema({
    title: String,
    author: String,
    publisher: String,
    genre: String,
    pages: String,
    rating: String,
    synopsis: String,
    image: String
}
);

const Comic = mongoose.model('Resource', comicSchema);

module.exports = Comic;