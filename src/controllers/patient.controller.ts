import type { Request, Response } from 'express';
import { createPatient, getAllPatients, getPatientById } from '../models/patient.model.js';

export async function listPatientsController(req: Request, res: Response) {
  const patients = await getAllPatients();
  res.json(patients);
}

export async function findPatientByIdController(req: Request, res: Response) {
  const patient = await getPatientById(Number(req.params.id));

  if (!patient) {
    res.status(404).json({ message: 'Paciente no encontrado' });
    return;
  }

  res.json(patient);
}

export async function createPatientController(req: Request, res: Response) {
  const patient = await createPatient(req.body);
  res.status(201).json(patient);
}