import React from 'react'
import { useForm } from "react-hook-form";

export default function Form({handleSubmitFormData}) {
    const {register,handleSubmit,reset} = useForm();
    let handleSubmitForm=(data)=>{
        handleSubmitFormData(data);
        reset();
    }
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className='bg-teal-400 h-auto w-56 p-4 flex flex-wrap gap-5 text-center mt-40'>
      <input {...register('name')} type="text" placeholder='name' className='w-full p-1'/>
      <input  {...register('email')} type="text" placeholder='email' className='w-full p-1'/>
      <input  {...register('image')} type="text" placeholder='image url' className='w-full p-1'/>
      <input type="submit" value="submit" className='bg-rose-400 px-2 rounded-md py-1 text-white font-bold'/>
    </form>
  )
}
