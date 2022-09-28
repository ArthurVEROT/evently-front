import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProviderWrapper } from './context/AuthContext'
import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
