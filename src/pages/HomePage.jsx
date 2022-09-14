import React from "react";
import styled from "styled-components";

import Navbar from "../components/NavbarHome";
import Button from "../components/ui/button";
import StyledLink from "../components/ui/styledLink";

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3.125rem;
  padding: 50px;

  background-color: #f4f7fa;
`;

const Bigtitle = styled.h2`
  text-align: center;
  font-size: 4rem;
`;

const BigButton = styled(Button)`
  font-size: 1.5rem;
`;

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <MainSection>
        <Bigtitle>Organize activities and meet people!</Bigtitle>
        <StyledLink to="/signup">
          <BigButton>Create an account</BigButton>
        </StyledLink>
      </MainSection>

      <footer></footer>
    </>
  );
};

export default HomePage;
