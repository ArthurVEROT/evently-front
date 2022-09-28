import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

import Navbar from "../../components/NavbarHome";
import BasicForm from "../../components/authForm/basicForm";
import ContainerCentered from "../../components/ui/containerCentered";
import AuthFormContainer from "./authFormContainer";

const SignupPage = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      url: "/auth/signup",
      baseURL: API_URL,
      method: "post",
      data: credentials,
    })
      .then((response) => {
        console.log(response.data);
        navigate("/auth/login", {
          state: { message: `User ${username} created successfully!` },
        });
      })
      .catch((err) => {
        const { status } = err.response;

        if (status === 401) {
          window.alert(`redirect to login page`);
        }
      });
  }

  //
  //Form fields data
  //
  const formFields = [
    {
      type: "text",
      key: "username",
      label: "Username: ",
      name: "username",
      id: "username",
      required: true,
      placeholder: "Username",
    },
    {
      type: "text",
      key: "email",
      label: "Email: ",
      name: "email",
      id: "email",
      required: true,
      placeholder: "Email",
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

  const formSubmit = "Sign up";

  return (
    <>
      <header>
        <Navbar />
      </header>
      <ContainerCentered>
        <AuthFormContainer>
          <h2>Create a new account</h2>
          <BasicForm
            formFields={formFields}
            formSubmit={formSubmit}
            formData={credentials}
            setFormData={setCredentials}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </AuthFormContainer>
      </ContainerCentered>
    </>
  );
};

export default SignupPage;
