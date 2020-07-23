import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import ProjectSec from "../components/ProjectSec.js";
import Card2 from "../components/Card"
export default function CreatePage(props) {
  const [] = useState("");
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [Categories, setCategories] = useState("");
  const [sponsors, setSponsors] = useState("");
  const [difficulties, setDifficulties] = useState(0);
  const [author, setAuthor] = useState("");
  const [logo,setLogo] = useState("")
  const [user, setUser] = useState({});

  const [open, setOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);
  console.log(" id ", props);
  // let User = props.location.state ? props.location.state.user : null;
  // const logout = () => {
  //   User = null
  // }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
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
  const createQues = async (e) => {
    const url = `https://bamboobackend123.herokuapp.com/ques`
    const quesData = {
      title,description,source,Categories,sponsors,difficulties,logo
    };

    const newQues = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quesData),
    });
    alert("Question created");
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log( title );
  };
  const handleSourceChange = (e) => {
    setSource(e.target.value);
    console.log( source );
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log( description );
  };
  const handleCategoriesChange = (e) => {
    setCategories(e.target.value);
    console.log( Categories );
  };
  const handleSponsorChange = (e) => {
    setSponsors(e.target.value);
    console.log( sponsors );
  };
  const handleDifficultChange = (e) => {
    setDifficulties(e.target.value);
    console.log( sponsors );
  };
  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
    console.log( sponsors );
  };
  const handleLogoChange = (e) => {
    setLogo(e.target.value);
    console.log( sponsors );
  };
  return (
    <div>
      <Navbar2 user={user} logout={logout}/>
      <CreateQuizForm
        title={title}
        source={source}
        description={description}
        setTitle={handleTitleChange}
        setSource={handleSourceChange}
        setCategories={handleCategoriesChange}
        setSponsors={handleSponsorChange}
        setDescription={handleDescriptionChange}
        setDifficulties={handleDifficultChange}
        setLogo={handleLogoChange}
        handleSubmit={createQues}
        createQues={createQues}
      />
      <Footer />

    </div>
  );
}
