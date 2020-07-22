import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
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
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader } from "mdbreact";
import "./SignupForm.css";

export default function SignupForm(props) {
  const [collapseID, setCollapseID] = useState("");
  const [userValid, setUserValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const toggleCollapse = (collapseID) => () =>
    setCollapseID((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={toggleCollapse("navbarCollapse")}
    />
  );
  const signup = () => {};


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log({ email });
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log({ password });
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    console.log({ password });
  };
  const handleUserChange = () => {};
  return (
    <div>
      <div id="classicformpage">
        {/* <Router> */}
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className="white-text"></strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={toggleCollapse("navbarCollapse")} />
              <MDBCollapse id="navbarCollapse" isOpen={collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem active>
                    <MDBNavLink to="/login">Login</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapseID && overlay}
        </div>
        {/* </Router> */}

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-3 mt-xl-5 mb-5"
                >
                  
                </MDBAnimation>

                <MDBCol md="6" xl="6" className="mb-6">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="green-text">
                        <h3 className="text-center white-text">
                           Sign up
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your name"
                          icon="user"
                          onChange={(e) => props.setUser(e)}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          onChange={(e) => props.setEmail(e)}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          type="password"
                          onChange={(e) => props.setPassword(e)}
                        />
                        <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Re-enter your password"
                          icon="lock"
                          type="password"
                          onChange={(e) => props.setConfirm(e)}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn
                            color="green"
                            onClick={() => {
                              props.handleSubmit();
                            }}
                          >
                            Sign Up
                          </MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                          {props.isRegistered ? null:<MDBPopover placement="bottom" popover clickable id="popper3">
                          <MDBBtn color="danger" >{props.message() || 
                          "All good!"}</MDBBtn>
                    <div>
                      <MDBPopoverHeader></MDBPopoverHeader>
                      <MDBPopoverBody>
                      </MDBPopoverBody>
                    </div>
                  </MDBPopover>}  
                          </div>
                          
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

      </div>
    </div>
  );
}
