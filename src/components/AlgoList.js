import React, { useState, useEffect } from "react";
import Rheostat from "rheostat";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "rheostat/lib/themes/DefaultTheme";
import { Accordion, Card, Button } from "react-bootstrap";
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
  const QUERYSTR_PREFIX = "q";
  const [minDifficulty, setMinDifficulty] = useState(0);
  const [maxDifficulty, setMaxDifficulty] = useState(10);
  const [isDragging, setIsDragging] = useState(false);
  const [questionList, setQuestionList] = useState(props.QuestionList);
  const [tempMinDiff, setTempMinDiff] = useState(0);
  const [tempMaxDiff, setTempMaxDiff] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [item, setItem] = useState([]);
  const history = useHistory();
  const query = useQuery();
  const [originalList, setOriginalList] = useState(item);

  const [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));
  // state={
  //   collapseID: "collapse1"
  // }

  // console.log(props.QuestionList.ques);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
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
    setOriginalList(response.data.ques);
  };
  const handleFilterSearch = (e) => {
    let filteredList = item;
    if (e) {
      e.preventDefault();
      history.push(
        `/question/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`
      );
    }
    if (keyword) {
      filteredList = item.filter(
        (item) => item.title.toLowerCase().includes(keyword.toLowerCase()) //Searching for jobs that actually has the input keyword
      );
    }
    setOriginalList(filteredList);
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
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h5 className="text-center">Filtering Data</h5>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {" "}
                    <div className="job-content m-1">
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
                                <></>
                                <MDBTypography
                                  note
                                  noteColor="warning"
                                  tag="h1"
                                  variant="h1"
                                >
                                  Difficulties:{tempMinDiff}/10
                                </MDBTypography>

                                <MDBTypography
                                  note
                                  noteColor="warning"
                                  tag="h1"
                                  variant="h1"
                                >
                                  Difficulties:{tempMaxDiff}/10
                                </MDBTypography>
                              </MDBRow>
                              <div></div>
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
                                onSubmit={handleFilterSearch}
                                label="Search for keyword"
                                color="danger"
                                onIconClick={() =>
                                  alert("Wait! This is an alert!")
                                }
                                onChange={(e) => setKeyword(e.target.value)}
                              />
                              <Button onClick={()=>{handleFilterSearch()}}>Search</Button>
                            </MDBRow>
                          </MDBCol>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </MDBContainer>
        </MDBContainer>
        {originalList.map((e) => (
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
