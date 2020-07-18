import React, { useState, useEffect } from "react";
import Rheostat from "rheostat";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "rheostat/lib/themes/DefaultTheme";
import { Row, Col, Badge } from "react-bootstrap";
import moment from "moment";
import "./QuestionList.css";
import {
  MDBCol,
  MDBBadge,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBTypography,
  MDBBox,
} from "mdbreact";
import PaginationPage from "./Pagination.js";
import { useHistory, useLocation, Link } from "react-router-dom";
import PaginationLink from "./PaginationLink.js";
import ProjectSec from "./ProjectSec.js";
import Card2 from "./Card.js";
ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);
export default function AlgoList(props) {
  // const [items, setItems] = useState([]);
  const [minDifficulty, setMinDifficulty] = useState(0);
  const [maxDifficulty, setMaxDifficulty] = useState(10);
  const [isDragging, setIsDragging] = useState(false);
  const [questionList, setQuestionList] = useState(props.QuestionList);
  const [tempMinDiff, setTempMinDiff] = useState(0);
  const [tempMaxDiff, setTempMaxDiff] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [item, setItem] = useState([]);
  // state={
  //   collapseID: "collapse1"
  // }
  
  // console.log(props.QuestionList.ques);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const QUERYSTR_PREFIX = "q";
  console.log("Where is question", props.QuestionList);

  useEffect(() => {
    getItemList();
  }, [minDifficulty, maxDifficulty, pageNum]);
  const getItemList = async () => {
    const url = `http://localhost:5000/ques?minDiff=${minDifficulty}&maxDiff=${maxDifficulty}&page=${pageNum}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log("AlgoList", response.data.ques);
    setItem(response.data.ques);
  };
  const handleChange = (e) => {
    setMinDifficulty(e.values[0]);
    setMaxDifficulty(e.values[1]);
  };

  const handleValuesUpdated = (e) => {
    setTempMinDiff(e.values[0]);
    setTempMaxDiff(e.values[1]);
  };
  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };

  // const handleSearch = (e) => {
  //     let filteredCards = originalCards;
  //     if(e){

  //     }
  //     if(keyword){

  //     }

  // }
  const Question = ({
    title,
    description,
    source,
    sponsors,
    categories,
    logo,
    author,
    difficulties,
    Categories,
    _id,
  }) => (
    <div>
      {/* <Link to={`question/${_id}`}> */}
      <a href={`${source}`}>
        <Card2
          title={title}
          description={description}
          sponsors={sponsors}
          categories={categories}
          logo={logo}
          author={author}
          difficulties={difficulties}
          Categories={Categories}
        />
      </a>
      {/* </Link> */}
    </div>
  );
  return (
    <div>
      <div className="m-5 ">
        {" "}
        <MDBContainer className="">
        <MDBContainer className="bgapp">
        <div class="accordion" id="accordionExample">
        <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <div className="job-content m-1" >
        
        <MDBTypography blockquote bqColor="warning">
                  <MDBBox tag="p" mb={0} className="bq-title">
                    Filtering Data
                  </MDBBox>
                </MDBTypography>
          <Row>
            <Col xs={8}>
              <div className="jobcard-descriptions">
                <h2 className="jobcard-title">{props.title}</h2>
                <div>
                <Rheostat
              min={0}
              max={10}
              values={[minDifficulty, maxDifficulty]}
              onValuesUpdated={handleValuesUpdated}
              onChange={handleChange}
              
            />
            
            <MDBRow>
              <>
              </>
              <MDBTypography note noteColor="warning" tag="h1" variant="h1">
                Difficulties:{tempMinDiff}/10
              </MDBTypography>
              
              <MDBTypography note noteColor="warning" tag="h1" variant="h1">
                Difficulties:{tempMaxDiff}/10
              </MDBTypography>
            </MDBRow>
                  <div>
                  </div>
                </div>
  
                <div>
    <ul className="benefit-list"></ul>
    <ul className="benefit-list"></ul>
                </div>
              </div>
            </Col>
            <Col>
             
            <MDBCol xs={12} md={8}>
              <MDBRow>
                <MDBInput
                  label="Search for keyword"
                  color="danger"
                  onIconClick={() => alert("Wait! This is an alert!")}
                />
              </MDBRow>
            </MDBCol>
  
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
          </div>
    </MDBContainer>
          
          
        </MDBContainer>
        {item.map((e) => (
          <Question {...e} />
        ))}
      </div>
      <MDBRow className="text-center justify-content-center">
        <PaginationLink disabled={pageNum === 1} handleClick={goPrevPage}>
          Prev Page
        </PaginationLink>
        <PaginationLink
          disabled={pageNum === maxPageNum}
          handleClick={goNextPage}
        >
          Next Page
        </PaginationLink>
      </MDBRow>
    </div>
  );
}
