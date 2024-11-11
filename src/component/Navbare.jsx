import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Shop from "../pages/shop/Shop";
import Contactus from "../pages/contact/Contactus";
import '../../src/component/nav.css'
import Searchproduct from "./Searchproduct";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export const Navbare = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="nav-main">
        <ul className="nav bg-gray-100 h-auto align-middle">
          <li className="navli">
            <Link to={'/'}>shop</Link>
          </li>
          <li className="navli">
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <Button onClick={openDrawer}>Open Cart</Button>
        </ul>
        
        <Drawer open={open} onClose={closeDrawer} className=" scrollbar-thin p-4 overflow-y-auto bg-gray-300 w-auto ">
          <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-8  w-full">
            <div className=" flex justify-start w-1/2">
              <Typography variant="h5" color="blue-gray">
                Shopin Cart
              </Typography>
            </div>
            <div className=" flex justify-end w-1/2">
              <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            <Cart />
          </Typography>
          <button onClick={closeDrawer} className="bg-gray-800 text-white p-2 rounded-xl w-full hover:shadow-lg">close</button>
        </Drawer>
      </div>
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
      </Routes>
    </>
  );
};
export default Navbare