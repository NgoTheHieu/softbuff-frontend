import React, { useState, useEffect } from "react";
import Navbar2 from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  MDBInput,
  MDBCol,
  MDBBtn,
  MDBFormInline,
  MDBJumbotron,
  MDBContainer,
  MDBRow,
} from "mdbreact";
export default function Weather() {
  const [dataList, setDataList] = useState(null);
  const [city, setCity] = useState("berlin");

  const getData = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const url = `http://localhost:5000/weather?city=${city}`;
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    setDataList(res);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(city);
  console.log(dataList);
  return (
    <div>
      <Navbar2 />
      Welcome to weather app
      <MDBCol md="12">
        <MDBFormInline onSubmit={getData} className="md-form mr-auto mb-4">
          <input
            className="form-control mr-sm-2"
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            placeholder="Search"
            aria-label="Search"
          />
          <MDBBtn
            gradient="aqua"
            rounded
            size="sm"
            type="submit"
            className="mr-auto"
          >
            Search
          </MDBBtn>
        </MDBFormInline>
      </MDBCol>
      <MDBContainer>
        <MDBJumbotron>
          <MDBRow>
            {" "}
            <MDBCol>
              <div>{dataList && dataList.data.city}</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            {" "}
            <MDBCol>
              <h1 className="text-center success">Currently:</h1>
            </MDBCol>
          </MDBRow>
          <div >
            <h5 class=" text-center">Celsius:</h5> <div className="text-danger text-center">{dataList && dataList.data.currently.celsius}°C</div>
          </div>
          <h5 className="text-center">Humidity:</h5> 
          <div className="text-danger text-center">
            {dataList && dataList.data.currently.humidity}
            km/h
          </div>
          <h5 className="text-center"> Precipitation:</h5>{" "}
          <div className="text-danger text-center">
            
            {dataList && dataList.data.currently.precipitation}°F
          </div>
          <h5 className="text-center"> Summary:</h5>
          <div className="text-danger text-center">
            {dataList && dataList.data.currently.summary}
          </div>
          <h5 className="text-center"> Temperature:</h5>{" "}
          <div className="text-danger text-center">
            
            {dataList && dataList.data.currently.temperature}
          </div>
          <h5 className="text-center"> Time:</h5>
          <div className="text-danger text-center">
             {dataList && dataList.data.currently.time}
          </div>
          <MDBRow>
            {" "}
            <MDBCol>
              <div>
                <h1 className="row d-flex justify-content-center text-danger">
                  {" "}
                  Daily:
                </h1>
              </div>
            </MDBCol>
          </MDBRow>
          {dataList &&
            dataList.data.daily.data.map((item) => {
              return (
                <>
                  <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                      <div className="currently text-center">
                        <h2>
                          <span class="text-danger">
                            {item.apparentTemperatureHigh}°F
                          </span>
                        </h2>
                        <h3 class="text-center"></h3>
                        <h5 class="text-center"></h5>
                      </div>
                    </div>
                    <div class="row d-flex justify-content-center my-3">
                      <div class="mr-4">Precipitation: {item.humidity} %</div>
                      <div class="mr-4">Humidity: {item.humidity}%</div>
                      <div class="mr-4">Wind: {item.windSpeed} km/h</div>
                    </div>
                  </div>
                </>
              );
            })}
          {dataList &&
            dataList.data.hourly.data.map((item) => (
              <div className="row d-flex justify-content-center mt-5">
                <div className="hourly mx-5 text-center">
                  <div>Time:{item.time}</div>
                  <div>Description: {item.summary}</div>
                  <div>Icon: {item.icon}</div>
                </div>
              </div>
            ))}

          <MDBRow>
            {" "}
            <MDBCol>
              <div>Hourly:</div>
            </MDBCol>
          </MDBRow>
        </MDBJumbotron>
      </MDBContainer>
      <Footer />
    </div>
  );
}
