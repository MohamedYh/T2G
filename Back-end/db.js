import { PrismaClient } from "./prisma/generated/clientPg/index.js";

const prisma = new PrismaClient();

export async function createUser(email, password, isConfirmed, v_code,token) {
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                isConfirmed,
                v_code,
                token
            },
        });
        console.log("New user created:", newUser);
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

export async function getAllUsers() {
    try {
        const users = await prisma.user.findMany();
        console.log("All users:", users);
        return users;
    } catch (error) {
        console.error("Error retrieving users:", error);
        return [];
    }
}

export async function checkEmailNotExists(email) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user == null;
    } catch (error) {
        console.error("Error checking email existence:", error);
        return false;
    }
}

export async function getUserData(email) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        console.error("Error checking email existence:", error);
        return false;
    }
}
export async function changeUserData(email, newData) {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: email,
            },
            data: newData,
        });
        console.log("User data updated:", updatedUser);
        return updatedUser;
    } catch (error) {
        console.error("Error updating user data:", error);
        return null;
    }
}
