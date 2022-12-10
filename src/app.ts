import mongoose from 'mongoose';
const dotenv = require('dotenv');
dotenv.config();
import express, { Express, Request, Response} from 'express';
import employeeShema from './models/employeeShema';

//const employeeRoutes = require('./routes/emoloyeeRoutes');
import employeeRoutes from "./routes/emoloyeeRoutes";
import { userInfo } from 'os';



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

app.get('/all', (req:Request, res:Response) => {
    employeeShema.find()
    .then((result) => {
        res.render('index', {title: 'All users', Users: result });
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post('/r', (req: Request, res: Response) => {
    const EmployeeShema = new employeeShema({
        name: req.body.name, 
        password: req.body.password, 
        email: req.body.email
    });
    
    EmployeeShema.save()
    .then((result) => {
        res.redirect('/r');
    })
    .catch((err) => {
        console.log(err);
    })

})

app.get('/c', (req:Request, res:Response) =>
    res.render('create')

);