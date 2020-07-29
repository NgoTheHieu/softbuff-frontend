import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AlgoDetail from "./pages/AlgoDetail";
import AlgoPage from "./pages/AlgoPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import CreatePage from "./pages/Create";
import ProfilePage from "./pages/ProfilePage"
import AdminPage from "./pages/AdminPage"
import APIPage from "./pages/API"
import WeatherPage from "./pages/API/Weather"
import MoviePage from "./pages/API/Movie"
function App(props) {
  let user2 = {
    isAuthenticated: true,
  };
  console.log(" id ", props);
  // const [user, setUser] = useState(
  //   props.location.state ? props.location.state.user : null
  // );

  const ProtectedRoute = (props) => {
    if (user2.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return (
    <Switch>
      <Route path="/" exact component={(props) => <MainPage {...props} />} />
      {/* <Route path="/" exact component={MainPage} /> */}
      <Route
        path="/login"
        exact
        component={(props) => <LoginPage {...props} />}
      />
      {/* this handle event that switch user to Login pages */}
      <Route
        path="/question"
        exact
        component={(props) => <AlgoPage {...props} />}
      />
      <Route
        path="/question/:id"
        exact
        component={(props) => <AlgoDetail {...props} />}
      />
      <Route path="/signup" exact component={SignupPage} />
      {/* this handle event that switch user to well, .. Jobs page */}
      <Route path="/create" exact component={CreatePage} />
      {/* this handle event that switch user to well, .. Jobs page */}
      <Route path="/profile/me" exact component={(props)=><ProfilePage {...props}/>} />
      <Route path="/admin" exact component={(props)=><AdminPage {...props}/>} />
      {/* this handle event that switch user to well, .. Jobs page */}
      <Route path="/portfolio" exact component={(props)=><AdminPage {...props}/>} />
      <Route path="/api" exact component={(props)=><APIPage {...props}/>} />
      <Route path="/api/weather" exact component={(props)=><WeatherPage {...props}/>} />
      <Route path="/api/movie" exact component={(props)=><MoviePage {...props}/>} />
      <ProtectedRoute
        path="/user/:id"
        render={(props) => <AlgoDetail {...props} />}
      />
    </Switch>
  );
}

export default App;
