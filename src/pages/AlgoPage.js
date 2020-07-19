import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import ProjectSec from "../components/ProjectSec.js";
import "../pages/pagedescript.css"
export default function AlgoPage() {
  const [user,setUser] = useState({
  
  })
  useEffect(()=>{
    // console.log(localStorage.getItem('user'))
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

  return (
    <>
    <Navbar user={user} logout={logout}/>
    <div className="bodyimage">
      <AlgoList  />
    </div>
    <Footer />
    </>
  );
}
