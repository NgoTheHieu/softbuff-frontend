import React, { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm.js";
import Loading from "../components/Loading.js";
import { useHistory, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar.js";
export default function LoginPage(props) {
  const [user, setUser] = useState(
    props.location.state ? props.location.state.user : null
  );
  const [open, setOpen] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [email, setEmail] = useState("cusaniv@gmail.com");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState(null)
  useEffect(() => {
    fetchUser();
  }, []);
  const history = useHistory();
  const loginWithFacebook = async (data) => {
    if (data && data.accessToken) {
      console.log(data.accessToken);
      const res = await fetch(
        `https://bamboobackend123.herokuapp.com/auth/login/facebook?token=${data.accessToken}`
      );
      if (res.ok) {
        const dt = await res.json();
        console.log(dt);
        const user = dt.data;
        const token = dt.token;
        setUser(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        // history.goBack();
        history.push("/", { user });
      } else {
        console.log(res);
      }
    }
  };
  const loginWithEmail = async (email, pw) => {
    if (!email || !pw) {
      console.log("Need email and password");
      return;
    }
    const res = await fetch("https://bamboobackend123.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password: pw }),
    });

    if (res.ok) {
      const dt = await res.json();
      console.log(dt);
      const user = dt.data.user;
      const token = dt.data.token;
      setUser(user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/", { user });
    } else {
      console.log(res);
      setMessage("Wrong email or password!")
    }
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoaded(true);
      return;
    }
    const res = await fetch(`https://bamboobackend123.herokuapp.com/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const dt = await res.json();
      setUser(dt.data);
    } else {
      localStorage.removeItem("token");
    }
    setLoaded(true);
  };

  if (!loaded) {
    return <Loading />;
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log({ email });
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log({ password });
  };

  return (
    <div>
      <LoginForm
        user={user}
        email={email}
        password={password}
        fetchUser={fetchUser}
        loginWithEmail={loginWithEmail}
        loginWithFacebook={loginWithFacebook}
        setEmail={handleEmailChange}
        setPassword={handlePasswordChange}
        message={message}
      />
    </div>
  );
}
