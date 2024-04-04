'use server'

import { revalidatePath } from "next/cache";
import prisma from "../db";

// create a user
export async function create(formData : FormData) {
    const user = formData.get('username') as string;
    const password = formData.get('password') as string;

    await prisma.user.create({
        data: {
            username: user,
            password: password
        }
    })
    
    revalidatePath ('/')
}
//  update a user information
export async function edit(formData : FormData) {
    const id = formData.get('inputid') as string;
    const user = formData.get('inputone') as string;
    const password = formData.get('password') as string;

    await prisma.user.update({
        where: {
          id:id
        },
        data: {
            username: user,
            password: password
        }
    });
    
    revalidatePath ('/')
}