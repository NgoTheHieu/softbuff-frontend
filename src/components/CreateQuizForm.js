import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
export default function CreateQuizForm(props) {
  return (
    <div>
      <MDBContainer>
        <Form onSubmit={props.createQues}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Questions Title</Form.Label>
              <Form.Control type="email" placeholder="Interview Questions etc..." onChange={(e) => props.setTitle(e)}/>
            </Form.Group>

            
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Categories</Form.Label>
            <Form.Control placeholder="NodeJS, ReactJS, Algorithm, Data Structure" onChange={(e) => props.setCategories(e)}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Source</Form.Label>
            <Form.Control placeholder="NodeJS, ReactJS, Algorithm, Data Structure" onChange={(e) => props.setSource(e)}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Sponsors</Form.Label>
            <Form.Control placeholder="CoderSchool,Bootcamp,..." onChange={(e) => props.setSponsors(e)}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Difficult</Form.Label>
            <Form.Control placeholder="CoderSchool,Bootcamp,..." onChange={(e) => props.setDifficulties(e)}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Author</Form.Label>
            <Form.Control placeholder="CoderSchool,Bootcamp,..." onChange={(e) => props.setSponsors(e)}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Logo</Form.Label>
            <Form.Control placeholder="CoderSchool,Bootcamp,..." onChange={(e) => props.setLogo(e)}/>
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="9" onChange={(e) => props.setDescription(e)}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={()=>{props.createQues()}}>
            Submit
          </Button>
        </Form>
      </MDBContainer>
    </div>
  );
}
