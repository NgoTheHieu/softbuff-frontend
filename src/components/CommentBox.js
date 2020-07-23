import React from "react";
import { MDBMedia } from "mdbreact";

const MediaObjectPage = (props) => {
  return (
    <MDBMedia>
      <MDBMedia left className="mr-3" href="#">
        <MDBMedia
          object
          src="https://cdn.cnn.com/cnnnext/dam/assets/200627081413-01-brown-bear-italy-file-large-169.jpg"
          alt="https://images.immediate.co.uk/production/volatile/sites/23/2019/10/shutterstock_1318940468-d60b405.jpg?quality=90&resize=620%2C413"
        />
      </MDBMedia>

      <MDBMedia body>
        <MDBMedia heading> From <h5>{props.username}</h5> comments that:</MDBMedia>
        <h1>{props.body}</h1>
        <h5>At :{props.createdAt}</h5>

        <hr className="my-4" />
      </MDBMedia>
    </MDBMedia>
  );
};

export default MediaObjectPage;
