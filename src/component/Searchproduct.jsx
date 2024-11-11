import React from 'react'
import { ProductList } from '../data/item'
import Productitem from '../pages/shop/Productitem'
import Shop from '../pages/shop/Shop'





const Searchproduct = () => {
  const [query, setQuery] = useState('')


  return (
    <div className='z-20 w-full h-20 mt-20 fixed bg-gray-100 flex justify-start p-3 items-center shadow-2xl top-0'>
      <input placeholder="search product..." className="rounded-lg p-2 bg-gray-300 w-60 text-deep-orange-900 hover:transition-all duration-7500 hover:ease-in hover:w-full " id='searchItem'
        onChange={e => setQuery(e.target.value)} >
      </input>
    </div>
  )
}

export default Searchproduct


