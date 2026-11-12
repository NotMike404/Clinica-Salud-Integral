import type { Request, Response } from 'express';
import { getAllDoctors } from '../models/doctor.model.js';

export async function listDoctors(req: Request, res: Response) {
  const specialty =
    typeof req.query.specialty === 'string' ? req.query.specialty : undefined;

  const doctors = await getAllDoctors(specialty);
  res.json(doctors);
}