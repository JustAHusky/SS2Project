import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SignUpPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const InputLabel = styled.label`
  width: 90%;
  margin-bottom: 30px;
`;

const InputField = styled.input`
  width: 92%;
  margin: 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 30%;
  margin: 10px 0;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <h1>Register an account</h1>
      <p>to continue using WordSmith</p>
      <SignUpForm>
        <InputLabel>
          Username:
          <InputField type="text" name="username" />
        </InputLabel>
        <InputLabel>
          Email:
          <InputField type="email" name="email" />
        </InputLabel>
        <InputLabel>
          Password:
          <InputField type="password" name="password" />
        </InputLabel>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </SignUpForm>
      <p>Already have an account? <Link to="/login">Log in here</Link>.</p>
    </SignUpPageContainer>
  );
};

export default SignUpPage;
