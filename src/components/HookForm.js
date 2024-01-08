import React from 'react'
import {useForm} from 'react-hook-form'
const HookForm = () => {

    const {register,handleSubmit ,formState:{errors}}=useForm()
    
   const onSubmit=(data)=>{
    console.log(data)
   }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='Name'>Name</label>
      <input {...register('name',{required:true,minLength:4})} type='text'/>
      {errors.name?.type=='required' && <p>This field is required</p>}
      {errors.name?.type=='minLength' && <p>The minimum characters should be 4</p>}
      <label htmlFor='Age'>Age</label>
      <input {...register ('Age')} type='number'/>
      <button>Submit</button>
      </form>

    </div>
  )
}

export default HookForm
