import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/consts";
import { AuthContext } from "../../context/AuthContext";

import Navbar from "../../components/NavbarHome";
import BasicForm from "../../components/authForm/basicForm";
import ContainerCentered from "../../components/ui/containerCentered";
import AuthFormContainer from "./authFormContainer";

const LoginPage = () => {
  const { authenticateUser, isLoggedIn } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [passwordResetIsSuccessful, setPasswordResetIsSuccessful] =
    useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [credentials, setCredentials] = useState({
    alias: "",
    password: "",
  });

  const { alias, password } = credentials;

  const navigate = useNavigate();

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = { password };
    if (alias.includes(`@`)) {
      request.email = alias;
    } else {
      request.username = alias;
    }

    try {
      const { data } = await axios({
        url: "/auth/login",
        baseURL: API_URL,
        method: "post",
        data: request,
      });
      if (data) {
        localStorage.setItem("authToken", data);
      }
      await authenticateUser();
    } catch (err) {
      console.log(err);
      // if (err.response.status === 404) {
      //   setErrorMsg("User does not exist!");
      // } else if (err.response.data.errors.password) {
      //   setErrorMsg("Wrong password!");
      // } else if (err.response.data.errors.verification) {
      //   setErrorMsg(
      //     "Your account is not yet verified please check your email!"
      //   );
      // } else {
      //   setErrorMsg("Something went wrong!");
      // }

      // setTimeout(() => {
      //   setErrorMsg("");
      // }, 2000);
    }
    console.log("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      navigate(`/`);
    }
  };

  //
  // Forgot password
  //
  const handleForgotPassowrd = () => {
    axios({
      method: "PATCH",
      url: `https://the-evently-api.herokuapp.com/reset-password`,
      data: { email: credentials.alias },
    })
      .then(() => {
        setPasswordResetIsSuccessful(true);
        setTimeout(() => {
          setPasswordResetIsSuccessful(false);
        }, 2000);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErrorMsg("User does not exist!");
        } else {
          setErrorMsg("Something went wrong!");
        }

        setTimeout(() => {
          setErrorMsg("");
        }, 2000);
      });

    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formFields = [
    {
      type: "text",
      key: "alias",
      label: "alias: ",
      name: "alias",
      id: "alias",
      required: true,
      placeholder: "Username or email",
    },
    {
      type: "password",
      key: "password",
      label: "password: ",
      name: "password",
      id: "password",
      required: true,
      placeholder: "Password",
    },
  ];

  const formSubmit = "Login";

  return (
    <>
      <header>
        <Navbar />
      </header>
      <ContainerCentered>
        <AuthFormContainer>
          <h2>Login to your account</h2>
          <BasicForm
            formFields={formFields}
            formData={credentials}
            formSubmit={formSubmit}
            setFormData={setCredentials}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </AuthFormContainer>
      </ContainerCentered>
    </>
  );
};

export default LoginPage;
