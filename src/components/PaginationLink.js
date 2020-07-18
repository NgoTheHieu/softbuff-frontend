import React from "react";
import {MDBBtn} from "mdbreact"
const PaginationLink = ({ disabled, handleClick, children }) => {
  if (disabled) {
  return (<MDBBtn color="light-green" className="btn-disabled">{children}</MDBBtn>
      // <a href="#" className="btn disabled ">
      //   {children}
      // </a>
    );
  }
return (<MDBBtn color="light-green" onClick={handleClick}>{children}</MDBBtn>
    // <a href="#" className="btn" onClick={handleClick}>
    //   {children}
    // </a>
  );
};

export default PaginationLink;