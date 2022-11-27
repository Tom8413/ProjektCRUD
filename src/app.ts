const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');


const app = express();
const source = process.env.DATABASE_URL;

//text 
app.get('/', (req :Request  , res:Response) => {
    //res.send('<p> Udało się </p>');
    console.log('dupa');
});

//add mongoose
mongoose.connect(source,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
    })
.then(() => app.listen(3001))
.catch((err:string) => console.log(err));

//text mongoose
app.get('/home', (res : Response, req : Request) => {
console.log("jesteśmy w domu");
});


