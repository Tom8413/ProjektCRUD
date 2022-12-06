import mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config();
import express, { Express, Request, Response} from 'express';

//const employeeRoutes = require('./routes/emoloyeeRoutes');
import employeeRoutes from "./routes/emoloyeeRoutes";


const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

let source:string = process.env.DATABASE_URL!;

//text 
app.get('/', (req :Request  , res:Response) => {
    //res.send('<p> Udało się </p>');
    console.log('dupa');
});


//add mongoose
mongoose.connect(source)
.then(() => app.listen(3001))
.catch((err:string) => console.log(err));

//text mongoose
app.get('/home', (res : Response, req : Request) => {
console.log("jesteśmy w domu");
});

app.get('/r', (req:Request, res:Response) => {
    res.render('create', {title: ' | Home'});
});
app.post('/b', (req: Request, res: Response) => {
    console.log(req.body);

})

app.get('/c', (req:Request, res:Response) =>
    res.render('create')

);