import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/authorize.middleware.js';
import { appointmentsBySpecialtyController } from '../controllers/report.controller.js';

const router: Router = Router();

router.get(
  '/appointments-by-specialty',
  verifyToken,
  authorize('GERENCIA'),
  appointmentsBySpecialtyController
);

export default router;