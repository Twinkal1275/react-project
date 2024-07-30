import React from "react";
import Navbar from "./Navbar";
import { useState } from 'react';
import { MDBContainer,MDBRow ,MDBInputGroup } from "mdb-react-ui-kit";
import { FaSearch, FaApple, FaStar,FaShoppingBag  } from "react-icons/fa";
import bssapp from './images/bas-app.jpg';
import stro from './images/stro.jpg';
import call from './images/call.jpg';
import Footer from "./Footer";
function Shop()
{
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };


    return(
        <>
        <Navbar/>
          <div id="shop">
            <h1 className="text-center mt-5 text-white text-opacity-60">Shop</h1>
            <p className="text-center fs-5">
            <a href="#" className="text-green-500">Home</a>
            <a href="#" className="text-green-500"> / Pages</a>
            <a href="#" className="text-white"> / Shop</a>
            </p>
          </div>

          <MDBContainer className="mt-5">
            <h1 className="mt-5">Fresh fruits shop</h1>
            <MDBRow className="fresh-shop">
                <div className="col-md-3">
                  <MDBInputGroup>
                  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FaSearch/></button>
                  </MDBInputGroup>

                  <h3 className="fs-2 mt-3">Categories</h3>
                  <a href="#" className="appp"><FaApple/> Apples</a>
                  <a href="#" className="appp"><FaApple/> Orange</a>
                  <a href="#" className="appp"><FaApple/> Strawbery</a>
                  <a href="#" className="appp"><FaApple/> Banana</a>
                  <a href="#" className="appp"><FaApple/> Pumpkin</a>


                  <h2 className="mt-5 fs-2">Price</h2>
                  <div>
      <input type="range" min="0" className="rang" max="500" value={minPrice} onChange={handleMinPriceChange}/><br/>
      <label> {minPrice}</label>
     

    </div>


                  <h3 className="fs-2 mt-5">Additional</h3>
                  <p className="fs-5  text-gray-500 mt-3"><input type="checkbox" /> Organic</p>
                  <p className="fs-5  text-gray-500"><input type="checkbox" /> Fresh</p>
                  <p className="fs-5  text-gray-500"><input type="checkbox" /> Sales</p>
                  <p className="fs-5 text-gray-500"><input type="checkbox" /> Discount</p>
                  <p className="fs-5 text-gray-500"><input type="checkbox" /> Expired</p>



                  <h3 className="fs-2 mt-5">Featured products</h3>
                  <MDBRow className="mt-3 big-app">
                    <div className="col-md-5">
                        <img src={bssapp} alt="" className="w-100 h-100" />
                    </div>

                    <div className="col-md-7">
                      <h3 className="fs-4">Big Apple</h3>
                      <p className="star appp"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      <h3 className="fs-3"><span className="fs-5">2.99</span> $ <span className="fs-5 text-red-500 line-through">4.11</span> <span className="text-red-500 line-through">$</span></h3>
                    </div>
                  </MDBRow>

                  <MDBRow className="mt-3 big-app">
                    <div className="col-md-5">
                        <img src={stro} alt="" className="w-100 h-100" />
                    </div>

                    <div className="col-md-7">
                      <h3 className="fs-4">Big Strawberry</h3>
                      <p className="star appp"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      <h3 className="fs-3"><span className="fs-5">2.99</span> $ <span className="fs-5 text-red-500 line-through">4.11</span> <span className="text-red-500 line-through">$</span></h3>
                    </div>
                  </MDBRow>


                  <MDBRow className="mt-3 big-app">
                    <div className="col-md-5">
                        <img src={call} alt="" className="w-100 h-100" />
                    </div>

                    <div className="col-md-7">
                      <h3 className="fs-4">Big Broccoli</h3>
                      <p className="star appp"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                      <h3 className="fs-3"><span className="fs-5">2.99</span> $ <span className="fs-5 text-red-500 line-through">4.11</span> <span className="text-red-500 line-through">$</span></h3>
                    </div>
                  </MDBRow>

                  <button type="button" className="btn btn-sm text-lime-500 mt-4 w-100 mor-btn">View More</button>

                  <div className="banner">
                   <h2 className="fs-2 text-orange-600 blod ms-40 mt-24">Fresh<br/>Fruit<br/>Banner</h2>
                  </div>


                </div>

                <div className="col-md-9">
                  <MDBRow>
                    <div className="col-md-4 boxes">
                    <div className="image">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                            </div>
                    </div>

                    <div className="col-md-4  boxes">
                    <div className="image">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                                </div>
                                </div>

                    <div className="col-md-4 boxes">
                    <div className="image1">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                                </div>
                    </div>
                  </MDBRow>

                  <MDBRow className="mt-5">
                    <div className="col-md-4 boxes">
                    <div className="image2">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                            </div>
                    </div>

                    <div className="col-md-4  boxes">
                    <div className="image3">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                                </div>
                                </div>

                    <div className="col-md-4 boxes">
                    <div className="image4">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                                </div>
                    </div>
                  </MDBRow>

                  <MDBRow className="mt-5">
                    <div className="col-md-4 boxes">
                    <div className="image1">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                            </div>
                    </div>

                    <div className="col-md-4  boxes">
                    <div className="image">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                                </div>
                                </div>

                    <div className="col-md-4 boxes">
                    <div className="image4">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                                </div>
                    </div>
                  </MDBRow>
                </div>
            </MDBRow>

            
          </MDBContainer>
          <Footer/>
        </>
    )
}
export default Shop