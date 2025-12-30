import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

    const [list, setList] = useState([])

    const fetchList = async() => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const removeProduct = async(id) => {
        try {
            const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return ( <
        div className = 'font-sans pt-8' >
        <
        h2 className = 'font-serif text-2xl mb-8 text-gray-900' > ALL PRODUCTS COLLECTION < /h2>

        <
        div className = 'flex flex-col gap-2' > { /* List Table Title */ } <
        div className = 'hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 border border-gray-200 bg-gray-50 text-sm font-serif tracking-wider uppercase' >
        <
        b > Image < /b> <
        b > Name < /b> <
        b > Category < /b> <
        b > Price < /b> <
        b className = 'text-center' > Action < /b> <
        /div>

        { /* Product List */ } {
            list.map((item, index) => ( <
                div className = 'grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-4 py-4 px-4 border border-gray-100 hover:bg-gray-50 transition-colors text-sm'
                key = { index } >
                <
                img className = 'w-12 h-16 object-cover border border-gray-200'
                src = { item.image[0] }
                alt = "" / >
                <
                p className = 'font-medium text-gray-800' > { item.name } < /p> <
                p className = 'text-gray-500 font-light' > { item.category } < /p> <
                p className = 'text-gray-900 font-medium' > { currency } { item.price } < /p> <
                div className = 'text-right md:text-center' >
                <
                button onClick = {
                    () => removeProduct(item._id) }
                className = 'cursor-pointer text-xs font-bold text-red-500 hover:text-red-700 uppercase tracking-wider border-b border-red-200 hover:border-red-700 pb-1' >
                REMOVE <
                /button> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    )
}

export default List