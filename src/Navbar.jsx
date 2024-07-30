import React from "react";
import { MDBNavbar,MDBContainer,MDBRow, MDBInputGroup } from "mdb-react-ui-kit";
import { FaSearchengin , FaBagShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { CiGrid42 } from "react-icons/ci";

function Navbar()
{
return(
<>
<MDBNavbar>
<MDBContainer>
<MDBRow>
<div className="col-md-3">
<a href="#" className="logo">Fruitables</a>
</div>


<div className="col-md-9 ">
<ul className="nav">
  <li><a href="/" style={{color:"rgb(129, 196, 8)"}}>Home</a></li>
  <li><a href="/shop">Shop</a></li>
  <li><a href="/shop-details">Shop Detail</a></li>
  <li><a href="/pages">Pages</a></li>
  <li><a href="/contact">Contact</a></li>
<button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
<li><FaSearchengin className="search"/></li>
</button>

<div class="modal fade w-100" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div class="modal-dialog  modal-xl">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="staticBackdropLabel">Search by keyword</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body mt-48">
<MDBInputGroup className="user w-100 p-5">
<input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
<button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit Now</button>
</MDBInputGroup>
</div>

</div>
</div>
</div>
<li><FaBagShopping className="fs-2 icon"/></li>
<li><IoPerson className=" fs-2 icon"/></li>
</ul>
</div>


</MDBRow>
</MDBContainer>
</MDBNavbar>
</>
)
}
export default Navbar