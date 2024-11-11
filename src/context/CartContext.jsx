import { createContext, useState } from "react";
import { ProductList } from '../data/item'


const cartContext=createContext()
const [items,setItems]=useState([])
const addItem=(id)=>{
    const filterProduct=ProductList.filter(p => p.id === i.id)[0]
        if (filterProduct === undefined) return
      const itemFilter=items.filter(i => i.id == id  )  
      if(itemFilter.length !==0){
        setItems(preItems => preItems.map(i => {
            if(i.id === id){
                i.quantity++
                return i
            }else{
                return i
            }
        }))
      }else{
        const item={
            id,
            quantity:1
        }
        setItems(preItems=>[...preItems,item])
      }
}
const removeItem=(id)=>{
    const itemFilter=items.filter(i => i.id === i.id)[0]
        if(itemFilter===undefined) return
        if(itemFilter.quantity > 1){
            setItems(preItems.map(i=>{
                if(i.id === i.id){
                    i.quantity--
                    return i
                }else{
                    return i
                }
            }))
        }
}

function cartProvider(children){ 
    const values={addItem,removeItem}
    return(
    <cartContext.Provider value={values}>
        {children}
    </cartContext.Provider>
    )
}
export default{cartContext,cartProvider}















