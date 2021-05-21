const { v4:uuid } = require('uuid');
const data = require('../data');

module.exports = {
all: (request, response) => {
    response.render('pages/index',{data: data});
}
}