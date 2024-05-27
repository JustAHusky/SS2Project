import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const InputField = styled.input`
  width: calc(100% - 20px);
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
`;

const SubmitButton = styled.button`
  width: 20%;
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

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <h1>Log in</h1>
      <p>to continue using WordSmith </p>
      <LoginForm>
        <label>
          Username:
          <InputField type="text" name="username" />
        </label>
        <label>
          Password:
          <InputField type="password" name="password" />
        </label>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
      <p>Don't have an account yet? <Link to="/signup">Sign up here</Link>.</p>
    </LoginPageContainer>
  );
};

export default LoginPage;
