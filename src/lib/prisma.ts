import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient({
    //mostra no console as queries que estão sendo feitas no BD
    log:['query']
})