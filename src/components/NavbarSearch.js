import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="12" classname="text-center justify-content-center">
      <MDBFormInline className="md-form mr-auto mb-4 text-center justify-content-center">
        
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn color="dark" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchPage;