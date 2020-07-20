import React, { useState, useEffect } from "react";
import Rheostat from "rheostat";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "rheostat/lib/themes/DefaultTheme";
import { Accordion, Card, Button } from "react-bootstrap";
import { Row, Col, Badge } from "react-bootstrap";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import moment from "moment";
import CategoryList from "./CategoryList.js";
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
  MDBJumbotron,
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
  const [categoryList, setCategoryList] = useState([]);
  const [cateKeyword,setCateKeyword] = useState("")
  const [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));


  // state={
  //   collapseID: "collapse1"
  // }

  // console.log(props.QuestionList.ques);
  const deleteItem = async (id) => {
    console.log(id);
    const url = `http://localhost:5000/ques/${id}`;
    const data = await fetch(url, {
      method: "DELETE",
      header: {
        "Content-Type": "application/json",
      },
    }
    );
    
    getItemList()
    console.log(data)
    // const response = await data.json();
    
    // console.log(response)
    // console.log("AlgoList", response.data.ques);
  };
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  console.log("Where is question", props.QuestionList);

  useEffect(() => {
    getItemList();
    getCategoryList();
  }, [minDifficulty, maxDifficulty, pageNum]);
  const getItemList = async () => {
    const url = `http://localhost:5000/ques?minDiff=${minDifficulty}&maxDiff=${maxDifficulty}&page=${pageNum}`;
    const data = await fetch(url);
    const response = await data.json();

    setItem(response.data.ques);
    setOriginalList(response.data.ques);
    console.log("AlgoList", response );
  };
  const getCategoryList = async () => {
    const url = `http://localhost:5000/ques/categories`;
    const data = await fetch(url);
    const response = await data.json();
    console.log("AlgoList", response.data.ques);
    setCategoryList(response.data);
    console.log(response.data)
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
        // (item) => item.Categories.filter( (cat) => cat.category.toLowerCase().includes(keyword.toLowerCase())).length > 0
        );
    }
    setOriginalList(filteredList);
  };
  const handleCateFilterSearch = (e) => {

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
          _id={_id}
        />
      </a>
      {props.user ? (
        <button
          type="button"
          onClick={() => deleteItem(_id)}
          className="btn btn-danger text-right"
        >
          Delete this item
        </button>
      ) : null}
      {/* </Link> */}
    </div>
  );
  console.log(props.user);
  return (
    <div>
      <div className="m-5 ">
        {" "}
        <MDBContainer className="text-center mt-5">
          <MDBContainer className="bgapp text-center mt-5">
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
                      <MDBTypography blockquote bqColor="success">
                        <MDBBox tag="p" mb={0} className="bq-title">
                          We have {originalList.length} items after filter
                        </MDBBox>
                        <MDBBox tag="p" mb={0} className="bq-title">
                       {/* {categoryList.map(item=><CategoryList id={categoryList.indexOf(item)}category={item.category}/>)} */}
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
                              <Button
                                onClick={() => {
                                  handleFilterSearch();
                                }}
                              >
                                Search
                              </Button>
                              <MDBInput
                                onSubmit={handleCateFilterSearch}
                                label="Search for Cate"
                                color="danger"
                                onIconClick={() =>
                                  alert("Wait! This is an alert!")
                                }
                                onChange={(e) => setCateKeyword(e.target.value)}
                              />
                              <Button
                                onClick={() => {
                                  handleCateFilterSearch();
                                }}
                              >
                                Search
                              </Button>
                            </MDBRow>
                          </MDBCol>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <MDBRow>
              <MDBContainer className="mt-5 text-center">
                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron className="text-center">
                      <MDBCardBody>
                        <MDBCardTitle className="indigo-text h1 mb-4">
                          We have {originalList.length} questions this page{" "}
                          {"&"} {item.length} in total
                        </MDBCardTitle>
                        <MDBCardText>
                          {originalList.map((e) => (
                            <Question {...e} />
                          ))}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBRow>
            {/* <h1 className="indigo-text">
                      <strong>
                        We have {originalList.length} items after filter
                      </strong>
                    </h1>

                    {originalList.map((e) => (
                      <Question {...e} />
                    ))} */}
          </MDBContainer>
        </MDBContainer>
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
