import type { Request, Response } from 'express';
import { getAppointmentsBySpecialty } from '../models/report.model.js';

export async function appointmentsBySpecialtyController(req: Request, res: Response) {
  const resultado = await getAppointmentsBySpecialty();
  res.json(resultado);
}