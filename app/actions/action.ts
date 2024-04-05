'use server'

import { revalidatePath } from "next/cache";
import prisma from "../db";
import { z } from "zod"

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




// const formSchema = z.object({
//     username: z.string().min(8).email('gggfdd'),
//     password: z.string().min(6).email('jff')
//   })
// const result = formSchema.safeParse({
//     user: formData.get('username') ,
//     password: formData.get('password') 
// });
// if (!result.success) {
// // handle error then return
// return{
// type: 'error',
// errors: result.error.flatten().fieldErrors,
// message: 'Missing field'
// }
// } 
// return {
// type:'success',
// message: 'User created successfully'

// }