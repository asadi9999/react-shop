import React, { useContext } from "react";
import { ShopContext } from '../../context/Shopcontext'
import { Button } from "@material-tailwind/react";


export const CartItem = (props) => {
  const { id, title, price, image, qty } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, } = useContext(ShopContext);

  return (
    <div className="cartItem border-b-2 mb-5 p-2">
      <div className="w-full h-56 rounded-full">
        <img src={image} alt={title} className="w-full h-52 rounded-full bg-cover"></img>
      </div>
      <div className="description">
        <p>
          <b className="text-gray-700">id: {id} product:<strong className="text-deep-orange-800">{title}</strong></b>
        </p>
        <p> Price: ${price}</p>
        <p>Qty: {qty}</p>

        <div className="countHandler flex gap-2 relative">
          <Button onClick={() => removeFromCart(id)} className="Button bg-gray-900 text-white p-2"> - </Button>
          <input className="text-center bg-gray-200 rounded-md"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <Button onClick={() => addToCart(id)} className="Button bg-gray-900 text-white p-2"> + </Button>
        </div>
      </div>
    </div>
  );
};
