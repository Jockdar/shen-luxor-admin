import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const List = ({ token }) => {

    const [list, setList] = useState([])
    const currency = '$' // Defined locally to avoid importing from App.jsx

    const fetchList = async() => {
        try {
            // --- FIX: Hardcoded URL ---
            const response = await axios.get('http://localhost:4000/api/product/list')

            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    const removeProduct = async(id) => {
        try {
            // --- FIX: Hardcoded URL ---
            const response = await axios.post('http://localhost:4000/api/product/remove', { id }, { headers: { token } })

            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return ( <
        >
        <
        h2 className = 'mb-4 text-2xl font-serif text-gray-900' > All Products List < /h2> <
        div className = 'flex flex-col gap-2' >

        { /* Table Header */ } <
        div className = 'hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-4 px-2 border bg-gray-100 text-sm font-serif' >
        <
        b > Image < /b> <
        b > Name < /b> <
        b > Category < /b> <
        b > Price < /b> <
        b className = 'text-center' > Action < /b> <
        /div>

        { /* Product List Items */ } {
            list.map((item, index) => ( <
                div className = 'grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-4 px-2 border text-sm font-sans'
                key = { index } > { /* Safe image access to prevent crashes if image array is empty */ } <
                img className = 'w-12'
                src = { item.image && item.image[0] ? item.image[0] : '' }
                alt = { item.name }
                /> <
                p > { item.name } < /p> <
                p > { item.category } < /p> <
                p > { currency } { item.price } < /p> <
                <button 
                    onClick={() => removeProduct(item._id)}
                    className='text-right md:text-center cursor-pointer bg-black text-white px-4 py-2 uppercase tracking-widest rounded-none hover:bg-gray-800 transition-colors font-sans text-sm'
                >
                    Remove
                </button> <
                /div>
            ))
        }

        <
        /div> <
        />
    )
}

export default List