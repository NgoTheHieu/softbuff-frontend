import React from 'react';
import { MDBMedia } from 'mdbreact';

const MediaObjectPage = (props) => {
  return (
    <MDBMedia>
      
      <MDBMedia left className="mr-3" href="#">
        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
      </MDBMedia>
      
      <MDBMedia body>
        <MDBMedia heading>
          
          From {props.user} comments that:
      </MDBMedia>
       <h1>{props.body}</h1>
       <h5>At :{props.createdAt}</h5>
       
      <hr className="my-4" />
    </MDBMedia>
    </MDBMedia>
  );
}

export default MediaObjectPage;