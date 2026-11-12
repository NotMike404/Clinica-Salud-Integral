import { z } from 'zod'

export const patientSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  apellidos: z.string().min(1, 'El apellido es obligatorio'),
  sexo: z.string().min(1, 'El sexo es obligatorio'),
  telefono: z.string().min(1, 'El teléfono es obligatorio'),
  direccion: z.string().min(1, 'La dirección es obligatoria'),
  email: z.string().email('El correo no tiene un formato válido'),
  fecha_nacimiento: z.coerce.date().max(new Date(), 'La fecha de nacimiento no puede ser futura')
})

import type { Request, Response, NextFunction } from 'express';

export function validatePatient(req: Request, res: Response, next: NextFunction):
void {
  const resultado = patientSchema.safeParse(req.body);

  if (!resultado.success) {
    res.status(400).json({ errors: resultado.error.issues });
     return;
  }
    req.body = resultado.data;
  next();
}