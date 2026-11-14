import prisma from '../config/prisma.js';
import type { Prisma } from '../../generated/prisma/client.js';

type AppointmentData = Pick<
  Prisma.CitaUncheckedCreateInput,
  'fecha' | 'pacienteId' | 'medicoId' | 'motivo'
>;

export function createAppointment(data: AppointmentData) {
  return prisma.cita.create({ data });
}

export function getDoctorAgenda(
  doctorId: number,
  from?: Date,
  to?: Date
) {
  return prisma.cita.findMany({
    where: {
      medicoId: doctorId,
      ...(from && to ? { fecha: { gte: from, lte: to } } : {})
    },
    include: { paciente: true },
    orderBy: { fecha: 'asc' }
  });
}

export function updateAppointmentStatus(
  id: number,
  status: 'COMPLETADA' | 'CANCELADA'
) {
  return prisma.cita.update({
    where: { id },
    data: { estado: status }
  });
}