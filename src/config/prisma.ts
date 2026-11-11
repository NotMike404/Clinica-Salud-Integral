import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../../generated/prisma/client.js"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL as string })

const prisma = new PrismaClient({ adapter })

export default prisma


//**Al usar Prisma Client, la aplicación marcaba un error porque el cliente todavía no estaba generado.
// Ejecuté: 'pnpm prisma generate' para generar los archivos necesarios y permitir que la conexión con Prisma funcionara. */
