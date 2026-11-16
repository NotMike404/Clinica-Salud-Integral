import prisma from '../config/prisma.js';

type CitasPorEspecialidad = {
  specialty: string;
  total_appointments: number;
};

export function getAppointmentsBySpecialty() {
  return prisma.$queryRaw<CitasPorEspecialidad[]>`
    SELECT e.nombre AS specialty, COUNT(c.id)::int AS total_appointments
    FROM citas c
    INNER JOIN medicos m ON m.id = c.id_medico
    INNER JOIN especialidades e ON e.id = m.id_especialidad
    GROUP BY e.nombre
    ORDER BY total_appointments DESC
  `;
}