import { Router } from 'express';
import { validatePatient } from '../middlewares/validate-patient.js';
import {
  listPatientsController,
  findPatientByIdController,
  createPatientController
} from '../controllers/patient.controller.js';

const router: Router = Router();

router.get('/', listPatientsController);
router.get('/:id', findPatientByIdController);
router.post('/', validatePatient, createPatientController);

export default router;