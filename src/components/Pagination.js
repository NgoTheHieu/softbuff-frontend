import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";

const PaginationPage = (props) => {
  return (
    <MDBRow>
      <MDBCol>
        <h4 className="title my-5 text-left">Bootstrap MDBPagination</h4>
        <MDBPagination circle className="text-center justify-content-center">
          <MDBPageItem disabled>
            <MDBPageNav className="page-link">
              <span>First</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem disabled>
            <MDBPageNav className="page-link" aria-label="Previous" onClick={()=>{props.back()}}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem active>
          </MDBPageItem>
          <MDBPageItem>
          </MDBPageItem>
          <MDBPageItem>
          </MDBPageItem>
          <MDBPageItem>
          </MDBPageItem>
          <MDBPageItem>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link" onClick={()=>props.next()}>
              &raquo;
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav className="page-link">
              Last
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
    )
}

export default PaginationPage;