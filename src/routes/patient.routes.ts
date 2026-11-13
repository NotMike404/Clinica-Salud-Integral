import { Router } from 'express';
import { validatePatient } from '../middlewares/validate-patient.js';
import {
  listPatientsController,
  findPatientByIdController,
  createPatientController
} from '../controllers/patient.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';

const router: Router = Router();

router.get('/', verifyToken, authorize('RECEPCIONISTA'), listPatientsController);
router.get('/:id', verifyToken, authorize('RECEPCIONISTA'), findPatientByIdController);
router.post('/', verifyToken, authorize('RECEPCIONISTA'), validatePatient, createPatientController);

export default router;