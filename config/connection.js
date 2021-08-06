const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=> {
        if (err){
            console.log('Error with MongoDB connection');
        }else {
            console.log('Successful connection with MongoDB!!');
        }
    });

/*another way to connect to mongodb  when it is running on the local computer
mongoose.connect('mongodb://localhost:27017/carolsBookstore', (error) => {
    if (err) {
        console.log('Error with mongodb connectivity')
    } else{
        console.log('Successful connection with server ')
    }
})



*/