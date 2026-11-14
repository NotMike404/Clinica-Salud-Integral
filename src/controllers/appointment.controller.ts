import type { Request, Response } from 'express';
import { getPatientById } from '../models/patient.model.js';
import { getDoctorById } from '../models/doctor.model.js';
import { createAppointment } from '../models/appointment.model.js';

export async function createAppointmentController(
  req: Request,
  res: Response
) {
  const { pacienteId, medicoId, fecha, motivo } = req.body;

  const patient = await getPatientById(pacienteId);
  if (!patient) {
    res.status(404).json({ message: 'Paciente no encontrado' });
    return;
  }

  const doctor = await getDoctorById(medicoId);
  if (!doctor) {
    res.status(404).json({ message: 'Médico no encontrado' });
    return;
  }

  const appointment = await createAppointment({
    pacienteId,
    medicoId,
    fecha,
    ...(motivo === undefined ? {} : { motivo })
  });

  res.status(201).json(appointment);
}