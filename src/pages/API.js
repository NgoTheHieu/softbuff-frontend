import React from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"
import {MDBBtn} from "mdbreact"
export default function Email() {
  return (
    <div>
      <Navbar2 />

      <MDBBtn color="primary">Sending Mail </MDBBtn>
      <MDBBtn>Default</MDBBtn>
      <MDBBtn color="secondary">Web Scraping</MDBBtn>
      <MDBBtn color="success">Movie API</MDBBtn>
      <Link to="/api/weather"><MDBBtn color="info">Weather API</MDBBtn></Link>
      <MDBBtn color="warning">Warning</MDBBtn>
      <MDBBtn color="danger">Danger</MDBBtn>

      <Footer />
    </div>
  );
}
