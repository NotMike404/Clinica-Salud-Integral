import express from 'express';
import dotenv from 'dotenv';    
dotenv.config();
import prisma from './config/prisma.js';

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('¡Servidor de la Clinica Salud Integral Listo y Andando! ¡Yeah!🎉');
});

app.get('/api/especialidades', async (req, res) => {
  const especialidades = await prisma.especialidad.findMany();
  res.json(especialidades);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});