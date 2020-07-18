import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar";
import Footer from "../components/Footer";
import CreateQuizForm from "../components/CreateQuizForm";
import AlgoList from "../components/AlgoList";
import ProjectSec from "../components/ProjectSec.js";
import Card2 from "../components/Card"
export default function CreatePage() {
  const [] = useState("");
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [Categories, setCategories] = useState("");
  const [sponsors, setSponsors] = useState("");
  const [difficulties, setDifficulties] = useState(0);
  const [author, setAuthor] = useState("");
  const [logo,setLogo] = useState("")
  const createQues = async (e) => {
    const url = `http://localhost:5000/ques`
    const quesData = {
      title,description,source,Categories,sponsors,difficulties,author,logo
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
      <Navbar2 />
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
