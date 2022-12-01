import EmployeeData from '../models/employeeShema';

function addEmployeeData() { (req: Request, res: Response) => {
    
    const emloyeeUser = new EmployeeData({
        name: 'userJeden',
        password: 'userjeden',
        emial: 'userjeden@goo.pl'
    })
    return emloyeeUser;

}};

export default addEmployeeData;