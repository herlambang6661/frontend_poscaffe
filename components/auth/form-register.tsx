"use client";

import { useActionState } from 'react';
import Link from 'next/link';
import { signUpCredentials } from '@/lib/actions'
import { RegisterButton } from '@/components/button';

const FormRegister = () => {
    const [state, formAction] = useActionState(signUpCredentials, null);
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-4">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action={formAction} className='space-y-6'>
                        
                        {state?.message ? (
                            <div className="p-4 mb-4 text-sm text-red rounded-lg bg-red-100" role='alert'>
                                <span className='font-medium text-red-500'>{state?.message}</span>
                            </div>
                        ) 
                        : null}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Name
                                </label>
                            </div>
                            <div className="">
                                <input
                                type="text" name='name' placeholder='Masukkan Nama'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <div aria-live="polite" aria-atomic="true">
                                    <span className='text-sm text-red-500'>{state?.error?.name}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="">
                                <input
                                type="email" name='email' placeholder='Masukkan Email'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                <div aria-live="polite" aria-atomic="true">
                                    <span className='text-sm text-red-500'>{state?.error?.email}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                                </label>
                            </div>
                            <div className="">
                                <input
                                type="password" name='password' placeholder='******'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <div aria-live="polite" aria-atomic="true">
                                    <span className='text-sm text-red-500'>{state?.error?.password}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">
                                Confirm Password
                                </label>
                            </div>
                            <div className="">
                                <input
                                type="password" name='confirmPassword' placeholder='******'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <div aria-live="polite" aria-atomic="true">
                                    <span className='text-sm text-red-500'>{state?.error?.confirmPassword}</span>
                                </div>
                            </div>
                        </div>
                    <RegisterButton/>
                </form>
                <div>
                    <p className='mt-10 text-center text-sm/6 text-gray-500'>
                        Already have an account? 
                        <Link href="/login"><span className='font-medium text-blue-600 hover:underline'> Sign In Here</span></Link>
                    </p>
                </div>
                </div>
            </div>
        </>
        // <form action={formAction} className='space-y-6'>
        //     {state?.message ? (
        //         <div className="p-4 mb-4 text-sm text-red rounded-lg bg-red-100" role='alert'>
        //             <span className='font-medium text-red-500'>{state?.message}</span>
        //         </div>
        //     ) 
        //     : null}
        //     <div>
        //         <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 '>Name</label>
        //         <input type="text" name='name' placeholder='Masukkan Nama' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
        //         <div aria-live="polite" aria-atomic="true">
        //             <span className='text-sm text-red-500 mt-2'>{ state?.error?.name }</span>
        //         </div>
        //     </div>
        //     <div>
        //         <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 '>Email</label>
        //         <input type="email" name='email' placeholder='Masukkan Email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
        //         <div aria-live="polite" aria-atomic="true">
        //             <span className='text-sm text-red-500 mt-2'>{state?.error?.email}</span>
        //         </div>
        //     </div>
        //     <div>
        //         <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900 '>Password</label>
        //         <input type="password" name='password' placeholder='******' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
        //         <div aria-live="polite" aria-atomic="true">
        //             <span className='text-sm text-red-500 mt-2'>{state?.error?.password}</span>
        //         </div>
        //     </div>
        //     <div>
        //         <label htmlFor="confirmPassword" className='block mb-2 text-sm font-medium text-gray-900 '>Confirm Password</label>
        //         <input type="password" name='confirmPassword' placeholder='******' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' />
        //         <div aria-live="polite" aria-atomic="true">
        //             <span className='text-sm text-red-500 mt-2'>{state?.error?.confirmPassword}</span>
        //         </div>
        //     </div>
        //     <RegisterButton/>
        //     <p className='text-sm font-light text-gray-500'>
        //         Already have an account? 
        //         <Link href="/login"><span className='font-medium text-blue-600 hover:underline'> Sign In</span></Link>
        //     </p>
        // </form>
    )
}

export default FormRegister