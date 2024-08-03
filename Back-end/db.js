import { PrismaClient } from './prisma/generated/clientPg/index.js';

const prisma = new PrismaClient()

async function createUser() {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: 'Mohamed',
                email: 'fat3fdsfiz@example.com',
                age: 16
            }
        });
        console.log('New user created:', newUser);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

createUser()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })