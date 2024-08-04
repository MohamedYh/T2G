import { PrismaClient } from './prisma/generated/clientPg/index.js';

const prisma = new PrismaClient()

export async function createUser(email,password,isConfirmed,v_code) {
    try {
        const newUser = await prisma.user.create({
            data: {
              email,password,isConfirmed,v_code
            }
        });
        console.log('New user created:', newUser);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    console.log('All users:', users);
    return users;
  } catch (error) {
    console.error('Error retrieving users:', error);
    return [];
  }
}
