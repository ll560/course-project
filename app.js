const express = require('express');
const morgan = require('morgan');


const app = express();

const PORT = 3000;
app.use(morgan('combined'));

//routes
// app.get("/views/pages/index.html", (request, response) => {
//     response.send("Hello");
// })
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (request, response) =>{
    response.render('pages/index');
})

app.get('/books/:id', (request, response) => {
    const bookId = request.params.id;
    response.send(`Displaying book with id of ${bookId}`);
})

app.get('/admin-console/update-book/:id', (request, response) => {
    const bookId = request.params.id;
    response.send(`Displaying book with id of ${bookId}`);
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});