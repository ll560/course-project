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
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (request, response) =>{
    response.render('pages/index');
})


app.get("/about", (request, response) =>{
    response.render('pages/about');
})

app.get("/login", (request, response) =>{
    response.render('pages/login');
})

app.get("/admin-console", (request, response) =>{
    response.render('pages/admin');
})

app.get("/admin-console/create-book", (request, response) =>{
    response.render('pages/create');
})

app.get('/books/:id', (request, response) => {
    const bookId = request.params.id;
    response.render('pages/book');
})

app.get('/admin-console/update-book/:id', (request, response) => {
    const bookId = request.params.id;
    response.render('pages/update');
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});