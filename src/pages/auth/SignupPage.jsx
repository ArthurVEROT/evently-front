import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/NavbarHome";
import SignupForm from "../../components/authForm/SignupForm"

const SignupPage = () => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  console.log("credentials", credentials);

  const navigate = useNavigate();

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: `https://the-evently-api.herokuapp.com/signup`,
      data: credentials,
    })
      .then((res) => {
        if (res.status === 201) {
          navigate(`/verify`);
        }
      })
      .catch((err) => {
        const { status } = err.response;

        if (status === 401) {
          window.alert(`redirect to login page`);
        }
      });
  }

  const { username, email, password } = credentials;

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <SignupForm/>
    </div>
  );
};

export default SignupPage;
