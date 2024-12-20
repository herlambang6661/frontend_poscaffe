import React from 'react'
import {getUsers} from '@/lib/data'

const UserTable = async () => {
    const users = await getUsers();
    if (!users?.length) return <h1 className='text-2xl'>No User Found</h1>
    return (
        <table className='w-full bg-white mt-3'>
            <thead className='border-b border-gray-100'>
                <tr>
                    <td className='py-3 px-6 text-left text-sm'>Name</td>
                    <td className='py-3 px-6 text-left text-sm'>Email</td>
                    <td className='py-3 px-6 text-left text-sm'>Role</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                <tr key={user.id}>
                        <td className='py-3 px-6'>{user.name}</td>
                        <td className='py-3 px-6'>{user.email}</td>
                        <td className='py-3 px-6'>{user.role}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable