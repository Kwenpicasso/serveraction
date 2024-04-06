'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'
import { remove } from '../actions/action'
import { Loader2 } from 'lucide-react'

const Delete = () => {
    const {pending} = useFormStatus()
  return (
   <>
    {pending ? (
         <Button type='submit' formAction={remove}>
         <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please wait
         </Button>
    ) : ( <Button type='submit' formAction={remove}>
    Delete
    </Button>)}
   </>
  )
}

export default Delete