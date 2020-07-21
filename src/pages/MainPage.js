import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import FormC from "../components/Error";
import CardExample from "../components/LandingCard";
import Gallery from "../components/Gallery";
import ProductCategories from "../components/OnePirate/modules/views/ProductCategories";
import {
  MDBCol,
  MDBBadge,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBTypography,
  MDBBox,MDBJumbotron,MDBCardImage,MDBCardBody,MDBCardTitle,MDBCardText
} from "mdbreact";
import "../pages/pagedescript.css";
export default function MainPage(props) {
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);
  console.log(" id ", props);
  // let User = props.location.state ? props.location.state.user : null;
  // const logout = () => {
  //   User = null
  // }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const logout = async () => {
    // const res = await fetch(`https://bamboobackend123.herokuapp.com/auth/logout`, {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // });
    // if (res.ok) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    // } else {  
    //   console.log("dont mess with my app");
    // }
  };

  return (
    <>
      <Navbar2 user={user} logout={logout} />
      <div className="bodyimage">
        <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center">
            <MDBCardTitle className="card-title h4 pb-2">
            <MDBCardTitle className="h2">
               Bamboo
              </MDBCardTitle>
              <hr className="my-4" />
              <MDBCardText>
              “Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.”
              </MDBCardText>
              <hr className="my-4" />
            </MDBCardTitle>

            <Gallery />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
              {/* We have {originalList.length} items after filter */}
              </MDBCardTitle>
              <MDBCardText>
              <MDBCardTitle className="card-title h4 pb-2">
              <hr className="my-4" />
            <MDBCardTitle className="h2">
                Contents {"&"} Licensed by:
              </MDBCardTitle>
              <hr className="my-4" />
            </MDBCardTitle>
        <ProductCategories />
              </MDBCardText>


            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
      </MDBContainer>
      </div>
      <Footer />
    </>
  );
}
