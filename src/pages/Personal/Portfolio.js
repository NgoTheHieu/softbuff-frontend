import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBFormInline,
  MDBJumbotron,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import "../pagedescript.css"
export default function Weather() {
  const [dataList, setDataList] = useState(null);
  const [city, setCity] = useState("singapore");

  const getData = async (e) => {
    if (e) {
      e.preventDefault();
    }
    if(city){
      
    const url = `https://bamboobackend123.herokuapp.com/weather?city=${city}`;
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    setDataList(res);
    } else {
      alert("Enter a city name first")
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(city);
  console.log(dataList);
  return (
    <div className="bodyimage">
      <Navbar2 />
    
      <MDBContainer>
        <MDBJumbotron>
        </MDBJumbotron>
      </MDBContainer>
      <Footer />
    </div>
  );
}
