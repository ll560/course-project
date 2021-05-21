const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const routes = require('./routes/index-routes')
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('combined'));


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});