"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { create } from "../actions/action"
import { useRef } from "react"






const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email format.",
  }),
  password: z.string().min(7, {
    message: "Password must be at least 7 characters.",
  }),
});


export function ProfileForm() {
 

     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: '',
    },
  })
 


const formRef = useRef<HTMLFormElement>(null);
  return (
   <div className="md:w-[50%] w-full m-auto justify-center flex items-center  p-5 mt-[4%]">
     <Form {...form}  >
      <form action={create} ref={formRef} onSubmit={form.handleSubmit(()=> formRef.current?.submit())}  className="space-y-8 w-[80%] mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email"  required {...field} />
              </FormControl>
              
             <FormMessage/>
            
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter password" required type="password" {...field} />
              </FormControl>
             
              <FormMessage/>
            
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={!form.formState.isValid}>
         Submit
        </Button>
      </form>
    </Form>


   
   </div>
  )
}
