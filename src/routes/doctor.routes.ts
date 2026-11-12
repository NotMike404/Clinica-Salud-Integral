import { Router } from 'express';
import { listDoctors } from '../controllers/doctor.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';

const router: Router = Router();

router.get('/', verifyToken, authorize('RECEPCIONISTA'), listDoctors);

export default router;