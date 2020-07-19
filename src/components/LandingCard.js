import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBContainer,
} from "mdbreact";
const CardExample = () => {
  return (
    <>
    <MDBContainer className="mt-1 d-flex align-items-stretch">
      <MDBRow>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top "
              src="https://i.pinimg.com/originals/27/a6/80/27a680bb44d695a450d029d5190c3191.jpg"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Wonder Women</strong>
              </MDBCardTitle>

              <p className="font-weight-bold green-text">Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

              <MDBCol md="12" className="d-flex justify-content-center">
                <MDBBtn rounded floating color="dribbble">
                  <MDBIcon size="lg" fab icon="link"></MDBIcon>
                </MDBBtn>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top"
              src="https://i.pinimg.com/originals/19/3f/81/193f81c899400e33d606c11d10385319.jpg"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Principal</strong>
              </MDBCardTitle>

              <p className="font-weight-bold green-text">Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

              <MDBCol md="12" className="d-flex justify-content-center">
                <MDBBtn rounded floating color="fb">
                  <MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color="tw">
                  <MDBIcon size="lg" fab icon="twitter"></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color="dribbble">
                  <MDBIcon size="lg" fab icon="dribbble"></MDBIcon>
                </MDBBtn>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardImage
              hover
              overlay="white-light"
              className="card-img-top"
              src="https://i.pinimg.com/originals/46/59/6a/46596a1dce678f11e516410e90fddc0c.jpg"
              alt="man"
            />

            <MDBCardBody cascade className="text-center">
              <MDBCardTitle className="card-title">
                <strong>Super Developer</strong>
              </MDBCardTitle>

              <p className="font-weight-bold green-text">Wev developer</p>

              <MDBCardText>
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.{" "}
              </MDBCardText>

              <MDBCol md="12" className="d-flex justify-content-center">
                <MDBBtn rounded floating color="fb">
                  <MDBIcon size="lg" fab icon="facebook-f"></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color="tw">
                  <MDBIcon size="lg" fab icon="twitter"></MDBIcon>
                </MDBBtn>

                <MDBBtn rounded floating color="dribbble">
                  <MDBIcon size="lg" fab icon="dribbble"></MDBIcon>
                </MDBBtn>
              </MDBCol>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
    </>
  );
};

export default CardExample;
