import { PrismaClient } from "@prisma/client";


declare global {
    var prisma : PrismaClient | undefined

}

const client = globalThis.prisma || new PrismaClient(); // nextjs 13 hot reload can make bunch of new prismaclient

if(process.env.NODE_ENV !== 'production'){
globalThis.prisma = client
}
export default client