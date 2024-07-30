import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TbFaceIdError } from "react-icons/tb";
function Page()
{
    return(
        <>
        <Navbar/>
        <div id="shop">
            <h1 className="text-center mt-5 text-white text-opacity-60">404 Error</h1>
            <p className="text-center fs-5">
            <a href="#" className="text-green-500">Home</a>
            <a href="#" className="text-green-500"> / Pages</a>
            <a href="#" className="text-white"> / Shop</a>
            </p>
          </div>

          <div className="page">
          <p className="text-center error text-9xl text-orange-500"><TbFaceIdError/></p>
          <br/>
          <h1 className="text-center text-7xl font-extrabold">404</h1>
          <h2 className="text-center text-5xl">Page Not Found</h2>
          <p className="text-center fs-5 text-gray-400 mb-20">We’re sorry, the page you have looked for does not exist in our website! <br/>
            Maybe go to our home page or try to use a search?</p>
            </div>
        <Footer/>
        </>
    )
}
export default Page