import { z } from 'zod';
import type { Request, Response, NextFunction } from 'express';

export const appointmentSchema = z.object({
  pacienteId: z.number().int().positive(),
  medicoId: z.number().int().positive(),
  fecha: z.coerce.date().min(
    new Date(),
    'No puedes agendar una cita en una fecha que ya pasó'
  ),
  motivo: z.string().optional()
});

export const appointmentStatusSchema = z.object({
  status: z.enum(['COMPLETADA', 'CANCELADA'])
});

export function validateAppointment(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const resultado = appointmentSchema.safeParse(req.body);

  if (!resultado.success) {
    res.status(400).json({ errors: resultado.error.issues });
    return;
  }

  req.body = resultado.data;
  next();
}

export function validateAppointmentStatus(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const resultado = appointmentStatusSchema.safeParse(req.body);

  if (!resultado.success) {
    res.status(400).json({ errors: resultado.error.issues });
    return;
  }

  req.body = resultado.data;
  next();
}