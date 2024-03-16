import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? 
new PrismaClient({
  log: ['query'],
})

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/* 
This piece of code creates a singleton instance of PrismaClient
This is needed because whenever the app re-renders, it tries to create a new instance of PrismaClient, and the old ones are not destroyed
Check this out: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
*/