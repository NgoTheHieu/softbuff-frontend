import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "./Loading.css"
const SpinnerPage = () => {
  return (
    
    <div class="beautifulbody">
     
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
      </div>
    </div>
  );
}

export default SpinnerPage;