import React,{useState,useEffect} from "react";
import Navbar2 from "../../components/Navbar";
import Footer from "../../components/Footer";
import { MDBJumbotron, MDBContainer } from "mdbreact";
export default function MoviePage() {
    const [dataList,setDataList] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = ()=>{
        const url = `http://localhost:5000/movie`
    }

  return (
    <div>
      <Navbar2 />

      <MDBContainer>
        <MDBJumbotron>
          <h1 className="text-center text-danger">Welcome to Movie API app</h1>

        </MDBJumbotron>
      </MDBContainer>
      <Footer />
    </div>
  );
}
