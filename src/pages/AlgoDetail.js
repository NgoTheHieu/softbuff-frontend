import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import FormC from "../components/Error";
import CardExample from "../components/LandingCard";
import Gallery from "../components/Gallery";
import CommentBox from "../components/CommentBox";
import ProductCategories from "../components/OnePirate/modules/views/ProductCategories";
import Card2 from "../components/Card.js";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
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
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdbreact";
import "../pages/pagedescript.css";
export default function AlgoDetail(props) {
  let { id } = useParams();
  const [user, setUser] = useState({});
  const [info, setInfo] = useState(null);
  const [cardInfo, setCardInfo] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [comment,setComment] = useState("")
  console.log(comment)
  const fetchData = async () => {
    const url = `https://bamboobackend123.herokuapp.com/ques/${id}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
    setInfo(response);
    setCardInfo(response);

    console.log("card info is", response);
  };

  console.log("info", info);
  useEffect(() => {
    fetchData();
    fetchComment();
    setUser(JSON.parse(localStorage.getItem("user")));

    // console.log(localStorage.getItem('user'))
  }, []);
  const fetchComment = async ()=>{
    const url = `https://bamboobackend123.herokuapp.com/ques/${id}/comments`;
    const data = await fetch(url);
    const response = await data.json();
    setCommentList(response.data)
    console.log(response);
  }

  const logout = async () => {
    // const res = await fetch(`https://bamboobackend123.herokuapp.com/auth/logout`, {
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // });
    // if (res.ok) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    // } else {
    //   console.log("dont mess with my app");
    // }
  };
  const postComment = async () => {
    if (!comment) {
      console.log("Need to type some words");
      return;
    }
    const res = await fetch(`https://bamboobackend123.herokuapp.com/ques/${id}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ comment }),
      
    
    })
    if(res.ok){
      alert("post comment successful")
    };

    // if (res.ok) {
    //   const dt = await res.json();
    //   console.log(dt);
    //   const user = dt.data.user;
    //   const token = dt.data.token;
    //   setUser(user);
    //   localStorage.setItem("token", token);
    //   localStorage.setItem("user", JSON.stringify(user));
    //   history.push("/", { user });
    // } else {
    //   console.log(res);
    //   setMessage("Wrong email or password!")
    // }
  };
  return (
    <div>
      <Navbar noview={true} user={user} />
      <div className="bodyimage">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <MDBJumbotron className="text-center">
                {info && (
                  <Card2
                    title={info.title}
                    description={info.description}
                    sponsors={info.sponsors}
                    logo={info.logo}
                    author={info.author}
                    difficulties={info.difficulties}
                    source={info.source}
                    // categories={categories}
                    Categories={info.Categories}
                    _id={info._id}
                  />
                )}
              </MDBJumbotron>
              
              <MDBJumbotron className="">
              {commentList && commentList.map(item=><CommentBox body={item.body} createdAt={item.createdAt} updatedAt={item.updatedAt} />)}
              </MDBJumbotron>
              <MDBJumbotron className="text-right">
              <MDBInput type="textarea" onChange={(e)=>{setComment(e.target.value)}}label="Add comment here" outline />
              <MDBBtn
    onClick={() => {
      postComment();
    }}
  >
    Post
  </MDBBtn>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}
