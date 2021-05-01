const express = require('express');
const morgan = require('morgan');

const app = express();

const PORT = 3000;
app.use(morgan('combined'));

//routes
app.get("/views/pages/index.html", (request, response) => {
    response.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});