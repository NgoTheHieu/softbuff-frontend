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
  MDBBox,
  MDBJumbotron,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
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
              <MDBJumbotron className="">
                <MDBCardTitle className="card-title  pb-2">
                  <MDBCardTitle className="h1 text-center text-success">Bamboo</MDBCardTitle>
                  <hr className="my-4 text-center" />
                  <MDBCardText>
                    “Notice that the stiffest tree is most easily cracked, while
                    the bamboo or willow survives by bending with the wind.”
                  </MDBCardText>
                  <hr className="my-4" />
                  <MDBCardText className="text-center h1 text-success">
                    “Welcome to the Landing Page of Bamboo”
                  </MDBCardText>

                  <hr className="my-4" />
                  <MDBCardText>
                    <div className="text-center">
                      My name is Ngo The Hieu. I am a Junior Fullstack Web
                      Developer who build web application using ReactJS and
                      NodeJS framework. I build this app Bamboo, to demonstrate
                      the skillset I have for Web Development. The reason I
                      chose Bamboo as a theme is:
                    </div>
                    <ol className="m-5">
                      <li>"I love nature"</li>
                      <li>
                        "Bamboo tree takes the first two years to grow its root.
                        After that, it sprouts up 4.5-12 meters high in 12 days"
                      </li>
                      <li>
                        "Bamboo are known to be stiff and hard-bended, but still
                        maintain an impregnable stand"
                      </li>
                      <li>"Water flows through the bamboo forest freely"</li>
                    </ol>
                    <div className="ml-5">
                      Bamboo represents a turtle who wins the race in real life, it exists the first two years that nobody notice its existence <br/>
                      But end up being the fastest growing tree in the next 24 hours (around 910 mm/hour). It displays how nature flows through the year<br/>
                      As human we tend to be negative during difficult time of struggle in existence, but nature allows it to flow well (as well as how data flows ^_^)<br/>
                      But the bamboo tree greatly represents how nature works.
                    </div>
                  </MDBCardText>
                  <hr className="my-4" />
                </MDBCardTitle>
                <hr className="my-4 text-center" />
                  <MDBCardText>
                    Checkout my Portfolio at this Link :<Link to="/portfolio"><MDBBtn color="success">Portfolio</MDBBtn></Link>
                  </MDBCardText>
                  <hr className="my-4" />
                <Gallery />
                <MDBCardBody>
                  <MDBCardTitle className="indigo-text h5 m-4">
                    {/* We have {originalList.length} items after filter */}
                  </MDBCardTitle>
                  <MDBCardText>
                    <MDBCardTitle className="card-title h4 pb-2">
                      <hr className="my-4" />
                      <MDBCardTitle className="h2 text-center">
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
