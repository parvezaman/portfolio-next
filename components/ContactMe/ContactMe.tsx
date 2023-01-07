import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";


type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

export default function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:parvezaman@outlook.com?subject=${formData.subject}&body=${formData.message}`
    };
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flow-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Contact me</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto max-sm:w-74'>
                <div className='flex space-x-2'>
                    <input {...register('name')} placeholder='Name' className='contactInput max-sm:w-36' type="text" />
                    <input {...register('email')} placeholder='email' className='contactInput max-sm:w-36' type="email" />
                </div>

                <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                <textarea {...register('message')} placeholder='Your message' className='contactInput' />
                <button type='submit' className='bg-[#aa5403] py-5 px-10 rounded-md text-gray-300 font-bold'>
                    Submit
                </button>
            </form>
        </div>
    )
}