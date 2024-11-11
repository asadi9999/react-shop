import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import { ProductList } from "../../data/item";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Button, Dialog } from "@material-tailwind/react";
import '../cart/cart.css'


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, saveProduct, getProduct } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [query,setQuery]=useState()
  const navigate = useNavigate();

  return (
    <div className="cart flex flex-col justify-center items-center z-20">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {ProductList.map((product) => {
          if (cartItems[product.id] > 0) {
            saveProduct(cartItems)
            return (
              <CartItem data={product} />
            )
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout top-5 relative">
          <p className="bg-orange-600 p-3 top-40 rounded-md text-white absolute">
            <strong>Total Price: </strong ><br /><strong className="text-gray-900">{totalAmount}$</strong>
          </p>
          <p className="text-bg-900">

          </p>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/")} size="sm" variant="outlined"> Continue Shopping </Button>
            <Button className="Button"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </Button>
          </div>
        </div>
      ) : (
        <h1 className="bg-red-500 p-2 rounded-xl text-white"> Your Shopping Cart is Empty !</h1>
      )}
    </div>
  );
};
export default Cart

