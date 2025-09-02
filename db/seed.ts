import { PrismaClient } from "@prisma/client";

import sampleData from "./sample-data";


//we are using async functions because prisma methods that we are going to use to get the products are asynchronous.
async function main(){
    const prisma = new PrismaClient();//initialize the prisma object
    await prisma.product.deleteMany();

    await prisma.product.createMany({data :sampleData.products})

    console.log("Database seeded successfully")


}
main();
