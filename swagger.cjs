const swaggerAutogen = require('swagger-autogen')({
  openapi: '3.0.0'
});

const doc = {
  info: {
    title: 'Clínica-Salud-Integral',
    description: 'API para pacientes, médicos y citas con autenticación',
    version: '1.0.0',
    author: 'Miguel Matamoros Cortes'
  },
  servers: [
    { url: 'http://localhost:3000' }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = [
  './src/index.ts'
];

swaggerAutogen(outputFile, endpointsFiles, doc);