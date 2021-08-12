require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const routes = require('./routes/index-routes')
const path = require('path');
require('./config/connection.js');
const mongoose = require('mongoose');

const app = express();
const PORT =  process.env.PORT || 3000;

app.use(morgan('combined'));

<<<<<<< HEAD

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

=======
//routes

app.get("/", (request, response) =>{
    response.send("This route points to the Home page");
})
app.get("/about", (request, response) =>{
    response.send("This route points to the About page");
})

app.get("/login", (request, response) =>{
    response.send("This route points to the Login page");
})

app.get("/admin-console", (request, response) =>{
    response.send("This route points to the Admin Console page");
})

app.get("/admin-console/create-book", (request, response) =>{
    response.send("This route points to the Create page");
})
>>>>>>> origin/homework-10

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});