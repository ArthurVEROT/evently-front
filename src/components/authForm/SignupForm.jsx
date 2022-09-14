import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: grey;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .3125rem;
`;

const SignupForm = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <h2>Create a new account</h2>
          <Form>
            <input type="text" name="" id="" placeholder="Username" />
            <input type="text" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <input type="submit" value="Sign up" name="" id="" />
          </Form>
        </FormContainer>
        <div>
          <span>Forgot password</span>
          <span>Create account</span>
        </div>
      </Container>
    </>
  );
};

export default SignupForm;
