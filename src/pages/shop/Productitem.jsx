import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, } from "@material-tailwind/react";
import { ShopContext} from '../../context/Shopcontext';
import { useContext,createContext } from 'react';

const Productitem = ({ product }) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[product.id];
    return (
        <>
            <Card className="mt-6 md:w-full flex flex-col bg-gray-100 shadow-gray-500 hover:shadow-2xl hover:scale-110 transition-all">
                <CardHeader color="blue-gray" className="">
                    <img
                        src={product.image}
                        alt="card-image" className='object-cover w-full sm:h-48 overflow-hidden md:w-full'
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 flex justify-center">
                       product name: {product.title}
                    </Typography>
                    <Typography className='flex justify-center'>
                      price:  {product.price} $
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                    <Button onClick={() => addToCart(product.id)}>add to cart
                    {cartItemCount > 0 && <>({cartItemCount})</>}
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default Productitem
