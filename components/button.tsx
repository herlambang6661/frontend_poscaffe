"use client";

import { useFormStatus } from "react-dom";
export const RegisterButton = () => {
    const {pending} = useFormStatus()
    return (
        <button
            type='submit'
            disabled={pending}
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            {pending ? "Loading..." : "Register"}
        </button>
    )
}
export const LoginButton = () => {
    const {pending} = useFormStatus()
    return (
        <button
            type='submit'
            disabled={pending}
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            {pending ? "Authenticating..." : "Sign In"}
        </button>
    )
}