const employeeControllers = require('../controllers/emoloyeeControllers');
const employeeShema = require('../models/employeeShema');

const router = express.Router();

router.get('/', addEmployeeData);

module.exports = router;