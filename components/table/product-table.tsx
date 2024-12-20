import React from 'react'
import { getProductByUser } from '@/lib/data'
import { formatDate } from '@/lib/utils';

const ProductTable = async () => {
    const product = await getProductByUser();
    if (!product?.length) return <h1 className='text-2xl'>No Product Found</h1>
    return (
        <table className='w-full bg-white mt-3'>
            <thead className='border-b border-gray-100'>
                <tr>
                    <td className='py-3 px-6 text-left text-sm'>Product Name</td>
                    <td className='py-3 px-6 text-left text-sm'>Price</td>
                    <td className='py-3 px-6 text-left text-sm'>Created At</td>
                    <td className='py-3 px-6 text-left text-sm'>Created By</td>
                </tr>
            </thead>
            <tbody>
                {product.map((product) => (
                <tr key={product.id}>
                        <td className='py-3 px-6'>{product.name}</td>
                        <td className='py-3 px-6'>{product.price}</td>
                        <td className='py-3 px-6'>{formatDate(  product.createdAt.toString())}</td>
                        <td className='py-3 px-6'>{product.user.name}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductTable