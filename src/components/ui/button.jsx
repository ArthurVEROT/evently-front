import styled from "styled-components";

const Button = styled.button`
  background: #5a005a;
  color: white;
  border: 2px solid #5a005a;
  border-radius: 3px;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background: #320011;
      color: white;
    `};
`;

export default Button

