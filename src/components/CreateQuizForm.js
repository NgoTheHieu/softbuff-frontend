import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBJumbotron,
  MDBCardBody,
} from "mdbreact";
import "./Pills.css";
export default function CreateQuizForm(props) {
  const [items, setItems] = useState("1");
  const togglePills = (type, tab) => (e) => {
    e.preventDefault();
    if (items[type] !== tab) {
      let items2 = { ...items };
      items2[type] = tab;
      setItems(items2);
    }
  };
  return (
    <div>
      <MDBContainer>
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron className="text-center">
                <MDBCardBody>
                  <MDBContainer>
                    <MDBNav pills className="nav-justified pills-aqua-gradient">
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={items["gradient"] === "1"}
                          onClick={togglePills("gradient", "1")}
                        >
                          CREATE
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={items["gradient"] === "2"}
                          onClick={togglePills("gradient", "2")}
                        >
                          READ
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={items["gradient"] === "3"}
                          onClick={togglePills("gradient", "3")}
                        >
                          UPDATE
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          link
                          to="#"
                          active={items["gradient"] === "4"}
                          onClick={togglePills("gradient", "4")}
                        >
                          DELETE
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={items["gradient"]}>
                      <MDBTabPane tabId="1">
                        <Form onSubmit={props.createQues}>
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Questions Title</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Interview Questions etc..."
                                onChange={(e) => props.setTitle(e)}
                              />
                            </Form.Group>
                          </Form.Row>

                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Categories</Form.Label>
                            <Form.Control
                              placeholder="NodeJS, ReactJS, Algorithm, Data Structure"
                              onChange={(e) => props.setCategories(e)}
                            />
                          </Form.Group>
                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Source</Form.Label>
                            <Form.Control
                              placeholder="URL"
                              onChange={(e) => props.setSource(e)}
                            />
                          </Form.Group>
                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Sponsors</Form.Label>
                            <Form.Control
                              placeholder="."
                              onChange={(e) => props.setSponsors(e)}
                            />
                          </Form.Group>
                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Difficult</Form.Label>
                            <Form.Control
                              placeholder=""
                              onChange={(e) => props.setDifficulties(e)}
                            />
                          </Form.Group>
                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                              placeholder=""
                              onChange={(e) => props.setSponsors(e)}
                            />
                          </Form.Group>
                          <Form.Group controlId="formGridAddress1">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control
                              placeholder=""
                              onChange={(e) => props.setLogo(e)}
                            />
                          </Form.Group>
                          <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                          </Form.Group>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows="9"
                              onChange={(e) => props.setDescription(e)}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                              props.createQues();
                            }}
                          >
                            Submit
                          </Button>
                        </Form>
                      </MDBTabPane>
                      <MDBTabPane tabId="2">
                        <Form onSubmit={props.createQues}>
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Questions Title</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Interview Questions etc..."
                                onChange={(e) => props.setTitle(e)}
                              />
                            </Form.Group>
                          </Form.Row>

                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                              props.createQues();
                            }}
                          >
                            Submit
                          </Button>
                        </Form>
                      </MDBTabPane>
                      <MDBTabPane tabId="3">
                      <Form onSubmit={props.createQues}>
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Questions Title</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="_id"
                                onChange={(e) => props.setTitle(e)}
                              />
                            </Form.Group>
                          </Form.Row>

                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows="9"
                              onChange={(e) => props.setDescription(e)}
                            />
                          </Form.Group>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                              props.createQues();
                            }}
                          >
                            Submit
                          </Button>
                        </Form>
                      </MDBTabPane>
                      <MDBTabPane tabId="2">
                        <Form onSubmit={props.createQues}>
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Questions Title</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="ID"
                                onChange={(e) => props.setTitle(e)}
                              />
                            </Form.Group>
                          </Form.Row>

                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                              props.createQues();
                            }}
                          >
                            Submit
                          </Button>
                        </Form>
                      </MDBTabPane>
                      <MDBTabPane tabId="4">
                        <Form onSubmit={props.createQues}>
                          <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Delete _id</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Interview Questions etc..."
                                onChange={(e) => props.setDescription(e)}
                              />
                            </Form.Group>
                          </Form.Row>

                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                              props.createQues();
                            }}
                          >
                            Submit
                          </Button>
                        </Form>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBContainer>
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
}
