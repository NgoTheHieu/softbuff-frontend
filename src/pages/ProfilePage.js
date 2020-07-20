import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import FormC from "../components/Error";
import CardExample from "../components/LandingCard"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBContainer } from 'mdbreact';
import {useHistory} from "react-router-dom"
import "../pages/pagedescript.css"
export default function ProfilePage(props) {
  const [user,setUser] = useState({
  
  })
  
  const [open, setOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [isLogin,setIsLogin] = useState(true);
  const history = useHistory()
  console.log(" id ", props);
  // let User = props.location.state ? props.location.state.user : null;
  // const logout = () => {
  //   User = null
  // }
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])
  const logout = async () => {
    
    
    const res = await fetch(`http://localhost:5000/auth/logout`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res.ok) {
      
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      history.push("/")
    } else {
      console.log("Don't mess with my app");
    }
  };

  
  return (<>
    <Navbar2 user={user} logout={logout}/>  
    <div className="bodyimage text-center justify-content-center">
    
    <MDBContainer><MDBCol md='8' ms="8">
        <MDBCard className="">
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src={user.image || `https://uwalls.com/img/gallery/93/thumbs/thumb_l_nus_11179.jpg`}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
  <strong>{user.name || null}</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>UserType: {user.type || null}{' '}</p>
            <MDBCardText>
    
            <p className='font-weight-bold blue-text'>UpdatedAt: {user.updatedAt || null}{' '}</p>
            <p className='font-weight-bold blue-text'>CreatedAt: {user.createdAt || null}{' '}</p>
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='dribbble'>
                <MDBIcon size='lg' fab icon='dribbble'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol></MDBContainer>
      
    </div>
    </>
  );
}