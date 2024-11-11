import { React, useState } from 'react'
import Productitem from './Productitem'
import { ProductList } from '../../data/item'
import '../../pages/shop/shop.css'


const Shop = () => {
    const [query, setQuery] = useState('')
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className=' scrollbar-thin z-20 w-full h-20 mt-10 fixed bg-gray-100 flex justify-start p-3 items-center shadow-2xl top-0'>
                    <input placeholder="search product..." className=" outline-none rounded-lg p-2 bg-gray-300 w-60 text-deep-orange-900 hover:transition-all duration-7500 hover:ease-in hover:w-full " id='searchItem'
                        onChange={e => setQuery(e.target.value)} >
                    </input>
                </div>
                <div className="shop relative top-40 grid lg:grid-cols-4">
                    {
                        ProductList.filter(pro => pro.title.toLowerCase().includes(query)).map((item) => (
                            <div className="max-h-fit top-20 md:col-span-1" key={item.id}>
                                <div className="flex flex-col md:flex-row justify-between gap-5 scale-75 ">
                                    <Productitem product={item} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Shop
