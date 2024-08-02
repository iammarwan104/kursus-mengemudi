'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function main() {
  // ... you will write your Prisma Client queries here
    const allUsers = await prisma.kebersihan.findMany()
    console.log(allUsers)
}

export async function getData(){
  const allUsers = await prisma.score.findMany()
  return allUsers
}


export async function addBlue(formData: FormData){
  const data = {
    banting: Number(formData.get('banting')),
    tendang: Number(formData.get('tendang'))
  }
// console.log(data)
  const allUsers = await prisma.score.update({
    where: {
      id: 1
    },
    data:{
      biru: data.banting,
      merah: 0
    }
  })
  return allUsers
}
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

  getData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })