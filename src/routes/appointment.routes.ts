import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import { validateAppointment } from '../middlewares/validate-appointment.js';
import { createAppointmentController } from '../controllers/appointment.controller.js';

const router: Router = Router();

router.post(
  '/',
  verifyToken,
  authorize('RECEPCIONISTA'),
  validateAppointment,
  createAppointmentController
);

export default router;