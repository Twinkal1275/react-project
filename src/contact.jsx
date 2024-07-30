import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MDBContainer,MDBRow } from "mdb-react-ui-kit";
import { FaMapLocation, FaEnvelope, FaPhone } from "react-icons/fa6";
function Contact()
{
  return(
    <>
    <Navbar/>

    <div id="shop">
            <h1 className="text-center mt-5 text-white text-opacity-60">Contact</h1>
            <p className="text-center fs-5">
            <a href="#" className="text-green-500">Home</a>
            <a href="#" className="text-green-500"> / Pages</a>
            <a href="#" className="text-white"> / Contact</a>
            </p>
          </div>

          <MDBContainer className="mt-5 contact">
            <h1 className="text-center mt-5 text-lime-500 font-extrabold">Get in touch</h1>
            <p className="text-center fs-5 text-slate-500">The contact form is currently inactive. Get a functional and working contact form
               with Ajax & <br/>PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<br/>
                <span className="text-lime-500">Download Now.</span> </p>

                <iframe className="ms-5 me-5 mt-5 border-none rounded-lg maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.109665617189!2d70.8238955721893!3d22.31169189759231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b6094a29ff11%3A0xcb30578e283a9696!2sGreenland%20Chokdi!5e0!3m2!1sen!2sin!4v1718462124812!5m2!1sen!2sin"
  width={910}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


<MDBRow className="forms">
  <div className="col-md-8 form">
    <input type="text" placeholder="Your Name" className="p-3 fs-5 w-100 mt-5 rounded-lg"/>
    <input type="mail" placeholder="Your Email" className="p-3 fs-5 w-100 mt-4 rounded-lg"/>
    <textarea type="text" placeholder="Your Message" className="p-1 fs-5 w-100 h-25 mt-4 rounded-lg"/>
    <button type="button" className="p-2 text-lime-500 w-100 rounded-lg mt-4 submit btn btn-lg">Submit</button>

  </div>

  <div className="col-md-4">
    <div className="address rounded-lg">
      <h2 className="flex fs-2 "><span className="me-4 fs-1 text-lime-500"><FaMapLocation/></span> Address</h2>
      <p className="fs-5 ms-5 text-slate-400">Greenland Chokdi,Rajkot.</p>
    </div>

    <div className="mail">
    <h2 className="flex fs-2 "><span className="me-4 fs-1 text-lime-500"><FaEnvelope/></span> Email</h2>
    <p className="fs-5 ms-5 text-slate-400">info@example.com</p>
    </div>

    <div className="phone">
    <h2 className="flex fs-2 "><span className="me-4 fs-1 text-lime-500"><FaPhone/></span> Phone</h2>
    <p className="fs-5 ms-5 text-slate-400">(+012) 3456 7890</p>
    </div>
  </div>
</MDBRow>
          </MDBContainer>

    <Footer/>
    </>
    )
}
export default Contact