import React, { useEffect, useState } from "react";
import { Router, Route, Switch ,useHistory} from "react-router-dom";
import SignupForm from "../components/SignupForm";


export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isUserExist, setIsUserExist] = useState(false);
  const [isUsernameShort, setIsUsernameShort] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [anchorEl, setAnchorEl] = useState("");
  const [initial,setInitial] = useState(true)
  // const [isUserExist,setIsUserExist] = useState(false)
  // const [signInEmail,setSignInEmail] = useState("")
  // const [] = useState("")
  useEffect(() => {}, []);
  const history = useHistory()
  const getAllUser = async () => {
    let url = "http://localhost:5000/user";
    let response = await fetch(url);
    let data = await response.json();

    setUserList(userList);
  };

  const setEmailInputBox = (e) => {
    setEmail(e.target.value);
    console.log({ email });
  };
  const setPasswordInputBox = (e) => {
    setPassword(e.target.value);
    console.log({ password });
  };
  const setConfirmPasswordInputBox = (e) => {
    setConfirmPassword(e.target.value);
    console.log({ confirmPassword });
  };
  const setUsernameInputBox = (e) => {
    setUsername(e.target.value);
    console.log({ username });
  };
  const onSignUp = () => {
    const url = ``;
  };

  const Message = () => {
    if (isUsernameShort) {
      return "Username must contain more than 3 character";
    } else if (isUserExist) {
      return "Username already exist";
    } else if (isValid === false) {
      return "Incorrect email format";
    } else if (isEmailExist) {
      return "Email already exists";
    } else if (isPasswordShort) {
      return "Password must contain more than 3 characters";
    } else if (isMatch === false) {
      return "Password unmatched";
    }
  };
  const addUser = async (username, email, password) => {
    console.log(username, email, password);
    const url = `http://localhost:5000/user`;
    let data = {
      name: username,
      email: email,
      password: password,
      type: "normal",
    };
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // alert("User added");
  };
  const allTrueFunction = (e) => {
    // const { isChecked, isMatch, isValid, isEmailExist, isUsernameExist, isPasswordShort, isUsernameShort } = this.state

    if (
      isMatch === true &&
      isUserExist === false &&
      isEmailExist === false &&
      isValid === true &&
      isChecked === true &&
      isPasswordShort === false &&
      isUsernameShort === false
    ) {
      addUser(e);
      setIsRegistered(true);
    } else {
      setIsFinished(false);
    }
  };
  const handleSubmit = (e) => {
    if (username.length < 3 || /^\s*$/.test(username) === true) {
      // this.setState({
      //   isUsernameShort: true,
      //   anchorEl: e.currentTarget
      // })
      setIsUsernameShort(true);
      console.log("user not long enough");
    } else if (username.length >= 3 || /^\s*$/.test(username) === false) {
      // this.setState({
      //   isUsernameShort: false,
      // })
      setIsUsernameShort(false);
      console.log("email not long enough");
      
    }

    for (let i = 0; i < userProfile.length; i++) {
      if (userProfile[i].name == username) {
        //   this.setState({
        //     isUsernameExist: true,
        //     anchorEl: e.currentTarget
        //   })
        setIsUserExist(true);

        console.log("user exist");
        break;
      } else if (userProfile[i].name !== username) {
        //   this.setState({
        //     isUsernameExist: false,
        //   })
        setIsUserExist(false);
      }
    }

    for (let i = 0; i < userProfile.length; i++) {
      if (userProfile[i].email == email) {
        //   this.setState({
        //     isEmailExist: true,
        //     anchorEl: e.currentTarget
        //   })
        setIsEmailExist(email);
        break;
      } else if (userProfile[i].email !== email) {
        //   this.setState({
        //     isEmailExist: false,

        //   })
        setIsEmailExist(false);
      }
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
      // this.setState({
      //   isValid: false,
      //   anchorEl: e.currentTarget
      // })
      setIsValid(false);
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === true) {
      // this.setState({
      //   isValid: true,
      // })
      setIsValid(true);
    }

    if (password.length < 3 || /^\s*$/.test(password) === true) {
      // this.setState({
      //   isPasswordShort: true,
      //   anchorEl: e.currentTarget
      // })
      setIsPasswordShort(true);
    } else if (password.length >= 3 || /^\s*$/.test(password) === false) {
      // this.setState({
      //   isPasswordShort: false,
      // })
      setIsPasswordShort(false);
    }

    if (password !== confirmPassword) {
      // this.setState({
      //   isMatch: false,
      //   anchorEl: e.currentTarget
      // })

      setIsMatch(false);
    } else if (password === confirmPassword) {
      // this.setState({
      //   isMatch: true,
      // })
      setIsMatch(true);
    }

    //   this.setState({
    //     isFinished: true,
    //   }, () => this.allTrueFunction(e))
    setIsFinished(true);
    // addUser();
    if (
      isMatch === true &&
      isUserExist === false &&
      isEmailExist === false &&
      isValid === true &&
      isPasswordShort === false &&
      isUsernameShort === false
    ) {
      addUser(username, email, confirmPassword);
      setIsRegistered(true);
      console.log("User added");
      alert("User added");
      
      history.push("/login")
    } else {
      setIsFinished(false);
    }
  };

  return (
    <div>
      <SignupForm
        username={username}
        email={email}
        password={password}
        isRegistered={isRegistered}
        setEmail={setEmailInputBox}
        setPassword={setPasswordInputBox}
        setConfirm={setConfirmPasswordInputBox}
        setUser={setUsernameInputBox}
        addUser={addUser}
        message={Message}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
