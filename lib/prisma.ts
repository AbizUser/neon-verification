// import { PrismaClient } from "@prisma/client";

// //Singleton
// let prisma: PrismaClient;

// //globalを付けることで毎回インスタンス化されない
// const globalForPrisma = global as unknown as{
//   prisma: PrismaClient | undefined;
// }

// if (!globalForPrisma.prisma) {
//   globalForPrisma.prisma = new PrismaClient();
// }

// prisma = globalForPrisma.prisma;

// export default prisma;


import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma