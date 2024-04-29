
import { PrismaClient } from '@prisma/client'

//const prismaClientSingleton = () => {
 //return new PrismaClient()
//}; 

//const globalForPrisma = globalThis;
//
//const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export const prisma = new PrismaClient(); 

//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

