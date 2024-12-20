"use client";

import { useActionState } from 'react';
import Link from 'next/link';
import { signInCredentials } from '@/lib/actions'
import { LoginButton } from '@/components/button';

const FormLogin = () => {
    const [state, formAction] = useActionState(signInCredentials, null);
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action={formAction} className='space-y-6'>
                        {state?.message ? (
                            <div className="p-4 mb-4 text-sm text-red rounded-lg bg-red-100" role='alert'>
                                <span className='font-medium text-red-500'>{state?.message}</span>
                            </div>
                        ) 
                        : null}
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                type="email" name='email' placeholder='Masukkan Email'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                <div aria-live="polite" aria-atomic="true">
                                    <span className='text-sm text-red-500 mt-2'>{state?.error?.email}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                type="password" name='password' placeholder='******'
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                <div aria-live="polite" aria-atomic="true">
                                    <span className='text-sm text-red-500 mt-2'>{state?.error?.password}</span>
                                </div>
                            </div>
                        </div>
                        <LoginButton/>
                    </form>
                    <div>
                        <p className='mt-5 text-center text-sm/6 text-gray-500'>
                            Don&apos;t have an account? 
                            <Link href="/register"><span className='font-medium text-blue-600 hover:underline'> Sign Up Here</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormLogin