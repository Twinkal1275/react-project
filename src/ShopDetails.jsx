import React from "react";
import Navbar from "./Navbar";
import { useState } from 'react';
import { MDBContainer, MDBRow,MDBInputGroup } from "mdb-react-ui-kit";
import { FaApple,FaStar,FaSearchengin, FaBagShopping} from "react-icons/fa6";
import bssapp from './images/bas-app.jpg';
import stro from './images/stro.jpg';
import call from './images/call.jpg';
import Footer from "./Footer";
import bro from './images/bro.jpg';
function ShopDetails()
{
    const [minPrice, setMinPrice] = useState(0);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };


    return(
        <>
            <Navbar/>
            <div id="shop">
            <h1 className="text-center mt-5 text-white text-opacity-60">Shop Details</h1>
            <p className="text-center fs-5">
            <a href="#" className="text-green-500">Home</a>
            <a href="#" className="text-green-500"> / Pages</a>
            <a href="#" className="text-white"> / Shop Details</a>
            </p>
          </div>
      
          <MDBContainer className="mt-5">
           <MDBRow>
            <div className="col-md-9 mt-5">
                <MDBRow className="brocoli">
                    <div className="col-md-6">
                        <img src={bro} alt="" className="mt-5 border-spacing-1 border rounded-lg"/>
                    </div>

                    <div className="col-md-6 mt-5">
                        <h3 className="fs-3 font-bold">Brocoli</h3>
                        <p className="fs-5 mt-2 text-zinc-500">Category: Vegetables</p>
                        <h2 className="fs-4 mt-2 font-extrabold">3,35 <span>$</span></h2>
                        <p className="star mt-2 fs-4"> <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <p className="mt-2 fs-5 text-zinc-500">The generated Lorem Ipsum is therefore always free from repetition injected humour, or 
                            non-characteristic words etc.<br/><br/>Susp endisse ultricies nisi vel quam suscipit. 
                            Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish</p>
                            <button type="button" className="flex flex-row bag mt-4"><FaBagShopping/> Add To Cart</button>
                    </div>

                    <div className="description mt-5">
                      <h3 className="fs-3 underline text-orange-500">Description</h3>
                      <hr className="mt-2"/>
                      <p className="fs-5 text-slate-500 mt-2">The generated Lorem Ipsum is therefore always free from repetition injected humour, or 
                        non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit 
                        <br/><br/>Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish filefish
                         Antarctic icefish goldeye aholehole trumpetfish pilot fish airbreathing catfish, electric ray 
                         sweeper.</p>

                          <div className="table">
                            <MDBRow className="text-center">
                              <div className="col-md-4">
                                <p className="tab-1">Weight</p>
                                <p>Country of Origin</p>
                                <p className="tab-1">Quality</p>
                                <p>Check</p>
                                <p className="tab-1"> Min Weight</p>
                              </div>

                              <div className="col-md-4">
                              <p className="tab-1">1 Kg</p>
                              <p>Agro Farm</p>
                              <p className="tab-1">Organic</p>
                              <p>Healthy</p>
                              <p className="tab-1">250 Kg</p>
                              </div>
                            </MDBRow>
                          </div>

                          <div className="reply">
                          <h2 className="fs-3 font-extrabold mt-5 ms-4 mb-4">Leave a Reply</h2>
                          <input type="text" placeholder="Your Name *" className="fs-5 border-b-2"/>
                          <input type="email" placeholder="Your email *" className="fs-5 border-b-2"/>
                          <textarea placeholder="Your Review *" className="fs-5 border-b-2"></textarea>
 
                          <MDBRow>
                            <div className="col-md-9">
                          <p className="flex fs-5 text-slate-400">Please rate: <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                          </div>

                          <div className="col-md-3">
                            <button type="button" className="post shadow-inner">Post Comment</button>
                          </div>
                          </MDBRow>
                          </div>
                    </div>
                </MDBRow>
            </div>

           <MDBRow className="fresh-shop">
            <div className="col-md-3 mt-5">
                  <MDBInputGroup>
                  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FaSearchengin/></button>
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
                  <p className="fs-5 text-gray-500 mt-3"><input type="checkbox" /> Organic</p>
                  <p className="fs-5 text-gray-500"><input type="checkbox" /> Fresh</p>
                  <p className="fs-5 text-gray-500"><input type="checkbox" /> Sales</p>
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
            </MDBRow>

            </MDBRow>       
            
            <h1 className="fs-1 font-extrabold mt-5">Related products</h1>
            <MDBRow className="mt-5">
                        <div className="col-md-3 box">
                            <div className="image3">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Banana</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button" className="btn btn-lg"><FaBagShopping/> Add To Cart</button>
                            </div>
                        </div>

                        <div className="col-md-3 box">
                            <div className="image4">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Oranges</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaBagShopping/> Add To Cart</button>
                            </div>
                        </div>


                         <div className="col-md-3 box">
                            <div className="image1">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Raspberries</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaBagShopping/> Add To Cart</button>
                            </div>
                        </div>


                           <div className="col-md-3 box">
                            <div className="image">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Grapes</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaBagShopping/> Add To Cart</button>
                            </div>
                        </div>                    
                        
                        </MDBRow>
          </MDBContainer>

          <Footer/>
        </>
    )
}
export default ShopDetails