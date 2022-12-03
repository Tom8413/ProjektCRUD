import EmployeeData from '../models/employeeShema';

export default class addEmployeeData {
    name: string; 
    password: string;
    email:string;

    constructor(name:string, password:string, email:string) {
        this.name = name;
        this.password = password;
        this.email = email;
    };

    dataFunction = (req:Request, res: Response) => {

        const emloyeeUser = new EmployeeData({
            name: 'userJeden',
            password: 'userjeden',
            emial: 'userjeden@goo.pl'
        })
    };
 
};

//export default addEmployeeData;