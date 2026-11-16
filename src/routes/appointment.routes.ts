import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import { validateAppointment } from '../middlewares/validate-appointment.js';
import { createAppointmentController } from '../controllers/appointment.controller.js';
import { listAppointmentsController } from '../controllers/appointment.controller.js';

const router: Router = Router();
router.get(
  '/',
  verifyToken,
  authorize('RECEPCIONISTA', 'MEDICO', 'GERENCIA'),
  listAppointmentsController
);

/* #swagger.security = [{
      "bearerAuth": []
}] */
router.post(
  '/',
  verifyToken,
  authorize('RECEPCIONISTA', 'MEDICO', 'GERENCIA'),
  validateAppointment,
  createAppointmentController
);

export default router;