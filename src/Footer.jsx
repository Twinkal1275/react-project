import React from "react";
import { MDBContainer, MDBRow, MDBInputGroup } from "mdb-react-ui-kit";
import { FaTwitter, FaFacebook, FaYoutube,FaLinkedin } from "react-icons/fa";
import card from './images/card.png';
function Footer()
{
    return(
        <>

        <div id="footer">
          <MDBContainer className="footer">
            <MDBRow className="mt-3">
                <div className="col-md-3">
                    <a href="#" className="logo">Fruitables</a><br/>
                    <a href="#" className="fs-4 text-orange-500">Fresh product</a>
                </div>

                <div className="col-md-5 mt-4">
                <MDBInputGroup className="w-100">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-outline-secondary hover:bg-orange-600" type="button" id="button-addon2">Subscribe Now</button>
                    </MDBInputGroup>
                </div>

                <div className="col-md-4 social mt-3 fs-5 text-orange-500 float-end">
                    <FaTwitter className="s-1"/><FaFacebook className="s-1"/><FaYoutube className="s-1"/><FaLinkedin className="s-1"/>
                </div>
            </MDBRow>
            <br/>
            <hr className="text-orange-500 border-2"/>

            <MDBRow>
                <div className="col-md-3">
                    <h2 className="fs-3 text-white mt-4">Why People Like us!</h2>
                    <p className="mt-3 fs-5 text-gray-400">typesetting, remaining <br/>essentially unchanged. It was <br/> popularised in the 1960s with <br/>
                     the like Aldus PageMaker <br/> including of Lorem Ipsum.</p>
                     <button type="button" className="btn btn-sm text-lime-400 border-orange-600 read">Read More</button>
                </div>

                <div className="col-md-3">
                <h2 className="fs-3 text-white mt-4">Shop Info</h2>
                <ul className="mt-3">
                    <li><a href="#" className="text-gray-400 fs-5">About Us</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Contact Us</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Terms & Condition</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Return Policy</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">FAQs & Help</a></li>
                </ul>

                </div>

                <div className="col-md-3">
                <h2 className="fs-3 text-white mt-4">Account</h2>
                <ul className="mt-3">
                    <li><a href="#" className="text-gray-400 fs-5">My Account</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Shop Details</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Shopping Cart</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Wishlist</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">Order History</a></li>
                    <li><a href="#" className="text-gray-400 fs-5">International Orders</a></li>
                </ul>
                </div>

                <div className="col-md-3">
                <h2 className="fs-3 text-white mt-4">Contact</h2>
                <p className="fs-5 text-gray-400">Address: 1429 Netus Rd, NY 48247
                    <br/>
                    Email: Example@gmail.com
                    Phone: +0123 4567 8910

                    Payment Accepted</p>
                    <br/>
                    <img src={card} alt=""/>

                </div>
            </MDBRow>
          </MDBContainer>
        </div>
        
        </>
    )
}
export default Footer