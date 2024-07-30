import React from "react";
import { MDBRow, MDBInputGroup,MDBContainer } from "mdb-react-ui-kit";
import { FaShoppingBag } from "react-icons/fa";
import fruit from './images/fruit.png';
import veg from './images/veg.jpg';
import app from './images/app.jpg';
import org from './images/orange.jpg';
import tomato from './images/rasp.jpg';
import banana from './images/banana.jpg';
import apri from './images/apricots.jpg';
import grap from './images/grapes.jpg';
import { FaStar } from "react-icons/fa";
import apple from './images/apple.jpg';
function Home()
{
    return(
        <>
           <div id="slide">
            <div className="slide">
   
             <MDBRow>
                  <div className="col-md-6 food">
                    <h4>100% Organic Foods</h4>
                    <h1>Organic Veggies & <br/>Fruits Foods</h1>
                    <MDBInputGroup className="user">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit Now</button>
                    </MDBInputGroup>
                   </div>

                <div className="col-md-6">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={fruit}  alt="..." style={{backgroundColor:"rgb(255, 181, 36)"}}/>
    </div>
    <div className="carousel-item">
      <img src={veg}  alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon arrerow" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon arrerow" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

</MDBRow>     
 </div>
            </div>


            {/* products */}
            <MDBContainer>
            <div id="product">
                <MDBRow className="product-nav">
                    <div className="col-md-3">
                        <h1 className="fs-1">Our Organic <br/>Products</h1>
                    </div>

                    <div className="col-md-9">
                        <ul className="p-nav">
                            <li><a href="#allproduct" style={{backgroundColor:"rgb(255, 181, 36)",color:"white"}}>All Products</a></li>
                            <li><a href="#vegetable">Vegetables</a></li>
                            <li><a href="#">Fruits</a></li>
                            <li><a href="#">Bread</a></li>
                            <li><a href="#">Meat</a></li>
                        </ul>
                    </div>
                </MDBRow>

                <div id="allProduct">
                    <MDBRow className="mt-5">
                        <div className="col-md-3 box">
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

                        <div className="col-md-3 box">
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


                         <div className="col-md-3 box">
                            <div className="image1">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Raspberries</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"> <FaShoppingBag/> Add To Cart</button>
                            </div>
                        </div>


                           <div className="col-md-3 box">
                            <div className="image2">
                                <p>Fruits</p>
                            </div>
                            <div className="contain">
                                <br/>
                                <h4 className="text-center fs-4 text-dark">Apricots</h4>
                                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                <h4 className="ps-2 fs-4">$4.99 / kg</h4>
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                            </div>
                        </div>                    
                        
                        </MDBRow>

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
                                <button type="button" className="btn btn-lg"><FaShoppingBag/> Add To Cart</button>
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
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
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
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
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
                                <button type="button"><FaShoppingBag/> Add To Cart</button>
                            </div>
                        </div>                    
                        
                        </MDBRow>
                </div>
        
            </div>
            </MDBContainer>


            <div id="fresh"className="mt-5">
                <MDBRow className="exotic">
                    <div className="col-md-6 mt-3 ps-5 pt-5">
                        <h1 className="mt-5"><span>Fresh Exotic <br/> Fruits</span></h1>
                        <h1 className="text-dark">in Our Store</h1>
                        <p>The generated Lorem Ipsum is therefore always free from repetition <br/> injected humour,
                         or non-characteristic words etc.</p>
                         <button type="button">BUY</button>
                    </div>

                    <div className="col-md-6">
                        <img src={app} alt="" className="mt-5 appl"/>
                    </div>
                </MDBRow>
            </div>


            {/* seller */}
            <div id="seller" className="mt-5 pt-5">
                <h1 className="text-center">Bestseller Products</h1>
                <p className="text-center text-secondary">Latin words, combined with a handful of model sentence structures, to generate 
                    Lorem<br/> Ipsum which looks reasonable.</p>

                    <MDBContainer className="mt-5">
                        <MDBRow>
                            <div className="col-md-4 rate" >
                                <MDBRow>
                                    <div className="col-md-6 org">
                                        <img src={org} alt=""/>
                                    </div>

                                    <div className="col-md-6 org">
                                        <h3 className="fs-3">Organic <br/> Orange</h3>
                                        <p className="star mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                        <h2 className="fs-4"><span className="fs-2 pt-3">3</span>.12 $</h2>
                                        <button type="button"><FaShoppingBag/>  <span className="ms-1">Add to <br/>Cart</span></button>
                                    </div>
                                </MDBRow>
                            </div>


                            <div className="col-md-4 rate" >
                                <MDBRow>
                                    <div className="col-md-6">
                                        <img src={tomato} alt=""/>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fs-3">Organic <br/> Orange</h3>
                                        <p className="star mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                        <h2 className="fs-4"><span className="fs-2 pt-3">3</span>.12 $</h2>
                                        <button type="button"><FaShoppingBag/>  <span className="ms-1">Add to <br/>Cart</span></button>
                                    </div>
                                </MDBRow>
                            </div>

                            <div className="col-md-4 rate" >
                                <MDBRow>
                                    <div className="col-md-6">
                                        <img src={banana} alt=""/>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fs-3">Organic <br/> Orange</h3>
                                        <p className="star mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                        <h2 className="fs-4"><span className="fs-2 pt-3">3</span>.12 $</h2>
                                        <button type="button"><FaShoppingBag/>  <span className="ms-1">Add to <br/>Cart</span></button>
                                    </div>
                                </MDBRow>
                            </div>
                        </MDBRow>

                        <MDBRow>
                            <div className="col-md-4 rate" >
                                <MDBRow>
                                    <div className="col-md-6">
                                        <img src={apri} alt=""/>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fs-3">Organic <br/> Orange</h3>
                                        <p className="star mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                        <h2 className="fs-4"><span className="fs-2 pt-3">3</span>.12 $</h2>
                                        <button type="button"><FaShoppingBag/>  <span className="ms-1">Add to <br/>Cart</span></button>
                                    </div>
                                </MDBRow>
                            </div>


                            <div className="col-md-4 rate" >
                                <MDBRow>
                                    <div className="col-md-6">
                                        <img src={grap} alt=""/>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fs-3">Organic <br/> Orange</h3>
                                        <p className="star mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                        <h2 className="fs-4"><span className="fs-2 pt-3">3</span>.12 $</h2>
                                        <button type="button"><FaShoppingBag/>  <span className="ms-1">Add to <br/>Cart</span></button>
                                    </div>
                                </MDBRow>
                            </div>

                            <div className="col-md-4 rate" >
                                <MDBRow>
                                    <div className="col-md-6">
                                        <img src={apple} alt=""/>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fs-3">Organic <br/> Orange</h3>
                                        <p className="star mt-2"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                                        <h2 className="fs-4"><span className="fs-2 pt-3">3</span>.12 $</h2>
                                        <button type="button"><FaShoppingBag/>  <span className="ms-1">Add to <br/>Cart</span></button>
                                    </div>
                                </MDBRow>
                            </div>
                        </MDBRow>
                    </MDBContainer>
            </div>
           
        </>
    )
}
export default Home