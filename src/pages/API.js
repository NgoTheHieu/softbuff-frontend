import React from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"
import {MDBBtn} from "mdbreact"
export default function Email() {
  return (
    <div>
      <Navbar2 />
    <div className="text-center">
    <MDBBtn color="primary">Sending Mail </MDBBtn>
      <MDBBtn>Default</MDBBtn>
      <MDBBtn color="secondary">Web Scraping</MDBBtn>
      <Link to="/api/movie"><MDBBtn color="success">Movie API</MDBBtn></Link> 
      <Link to="/api/weather"><MDBBtn color="success">Weather API</MDBBtn></Link>
      <Link to="/question"><MDBBtn color="warning">Question list</MDBBtn></Link>
      <Link to="/api/mememaker"><MDBBtn color="danger">MemeMaker</MDBBtn></Link>

    </div>
      
      <Footer />
    </div>
  );
}
