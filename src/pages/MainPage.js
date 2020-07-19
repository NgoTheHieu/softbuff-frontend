import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import FormC from "../components/Error";
import CardExample from "../components/LandingCard"
import ProductCategories from '../components/OnePirate/modules/views/ProductCategories';
import "../pages/pagedescript.css"
export default function MainPage(props) {
  const [user,setUser] = useState({
  })
  
  const [open, setOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);
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
    } else {
      console.log("Don't mess with my app");
    }
  };

  
  return (<>
    <Navbar2 user={user} logout={logout}/>  
    <div className="bodyimage">
      <CardExample/>
      <ProductCategories />
    </div>
    <Footer />
    </>
  );
}
