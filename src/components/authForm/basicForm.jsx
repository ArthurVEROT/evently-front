import styled from "styled-components";

//
// Styles
//

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
  border-radius: 5px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Input = styled.input`
  padding: 4px;
  border-radius: 10px;
`;

const BasicForm = ({ formFields, formData, handleChange , handleSubmit, formSubmit }) => {
  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          {formFields.map(({ ...formField }) => (
            <Input
              type={formField.type}
              key={formField.key}
              value={formData[formField.name]}
              {...formField}
              onChange={(e) => handleChange(e)}
            />
          ))}
          <Input type="submit" value={formSubmit}/>
        </Form>
      </FormContainer>
    </>
  );
};

export default BasicForm;
