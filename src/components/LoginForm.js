import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { Modal } from "react-bootstrap";
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
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
} from "mdbreact";
import "./SignupForm.css";

export default function SignupForm(props) {
  const [collapseID, setCollapseID] = useState("");
  const [openFacebook, setOpenFacebook] = useState(false);
  const [message, setMessage] = useState("");
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
  
  const handleSubmit = async (e) => {};
  return (
    <div>
      <div id="classicformpage">
        {/* <Router> */}
        <div>
          <MDBNavbar dark expand="md" fixed="top">
            <MDBContainer>
              <MDBNavbarBrand>
                <MDBBtn outline color="success">
                  BambooSoft
                </MDBBtn>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={toggleCollapse("navbarCollapse")} />
              <MDBCollapse id="navbarCollapse" isOpen={collapseID} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem></MDBNavItem>
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
                ></MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody className="white-text">
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Login:
                        </h3>
                        <hr className="hr-light" />

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
                        <div className="text-center mt-4 black-text">
                          <MDBBtn
                            color="success"
                            onClick={() =>
                              props.loginWithEmail(props.email, props.password)
                            }
                          >
                            Login
                          </MDBBtn>
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <MDBBtn
                              color="blue"
                              size="sm"
                              onClick={() => {
                                setOpenFacebook(true);
                              }}
                            >
                              <MDBIcon fab icon="facebook-f" /> Log in with Facebook
                            </MDBBtn>
                            
                          </div>
                          {props.message?  <MDBPopover
                              placement="bottom"
                              popover
                              clickable
                              id="popper3"
                            >
                             <MDBBtn color="warning">
                                {props.message || "Looking Good!"}
                              </MDBBtn>
                              <div>
                                <MDBPopoverHeader></MDBPopoverHeader>
                                <MDBPopoverBody></MDBPopoverBody>
                              </div>
                            </MDBPopover>:null}
                        </div>
                        <Modal
                          show={openFacebook}
                          onHide={() => setOpenFacebook(!openFacebook)}
                        >
                          <FacebookLogin
                            appId="671839706705875"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={props.loginWithFacebook}
                          />
                        </Modal>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}
