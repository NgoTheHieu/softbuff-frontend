import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import ProjectSec from "../components/ProjectSec.js";
import "../pages/pagedescript.css";
import {
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory,
} from "react-router-dom";
import {MDBContainer,MDBJumbotron,MDBCardBody,MDBCardTitle,MDBCardText} from "mdbreact"
export default function AlgoPage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    // console.log(localStorage.getItem('user'))
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(user);
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
      <Navbar user={user} logout={logout} />
      <div className="bodyimage">
       {!user && <MDBContainer>    <MDBJumbotron className="text-center">
                      <MDBCardBody>
                        <MDBCardTitle className="indigo-text h1 mb-4"></MDBCardTitle>
                        <MDBCardText>
                        <hr className="my-4" /><h1> You need to login first to see the list</h1><hr className="my-4" />
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBJumbotron> </MDBContainer>} 
                    {user && <AlgoList user={user} />}
      </div>
      <Footer />
    </>
  );
}
