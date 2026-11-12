import { Router } from 'express';
import { listDoctors } from '../controllers/doctor.controller.js';

const router: Router = Router();

router.get('/', listDoctors);

export default router;