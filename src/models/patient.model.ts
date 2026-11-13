import prisma from '../config/prisma.js';
import type { Prisma } from '../../generated/prisma/client.js';


export function getAllPatients()  {
  return prisma.paciente.findMany();
}

export function getPatientById(id: number) {
  return prisma.paciente.findUnique({
    where: { id },
    include: {
      citas: {
        include: {
          medico: {
            include: { especialidad: true }
          }
        },
        orderBy: { fecha: 'desc' }
      }
    }
  });
}

export function createPatient(data: Prisma.PacienteCreateInput) {
 return prisma.paciente.create({ data });
}
