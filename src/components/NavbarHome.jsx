import styled from "styled-components";

import Button from "../components/ui/button";
import StyledLink from "../components/ui/styledLink";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavbarHome = () => {
  return (
    <>
      <Navbar>
        <StyledLink to="/">
          <h1>Evently</h1>
        </StyledLink>
        <Container>
          <StyledLink to="/signup">
            <Button>Sign up</Button>
          </StyledLink>
          <StyledLink to="/login">
            <Button>Login</Button>
          </StyledLink>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
