import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from "react";
import axios from 'axios';

const FeaturePageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 160px;
  background-color: #f0f0f0;
  padding: 20px;
  border-right: 1px solid #000000;
`;

const SidebarLinkContainer = styled.div`
  margin-bottom: 10px;
`;

const SidebarLink = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000000;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e0f7fa;
  }
`;

const SidebarLinkActive = styled(Link)`
  display: block;
  color: #333;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  background-color: #e8f4d9;
  cursor: pointer;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
`;

const InputOutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  width: 90%;
`;

const InputTextArea = styled.textarea`
  width: 90%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  font-size: 16px;
`;

const OutputTextArea = styled.textarea`
  width: 90%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  font-size: 16px;
`;

const ProcessButton = styled.button`
  width: 100px;
  padding: 10px 10px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
`;

function PlagiarismChecker(){
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    console.log("loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAECJjA7roZz7xaDpLTgpqMxow0WI4jaGc",
      method: "POST",
      data: {
        contents: [
          { parts: [{ text: "Check the input text for plagiarism. The app will analyze the input text and compare it with other documents on the internet then provide a percentage of how much of the text matches other documents, as well as links to those documents: " + question }] }
        ],
      },
    });
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]["text"]);
  }

  return (
    <FeaturePageContainer>
      <Sidebar>
        <SidebarLinkContainer>
          <SidebarLink to="/grammar-checker">Grammar Checker</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLinkActive to="/plagiarism-checker">Plagiarism Checker</SidebarLinkActive>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/text-completion">Text Completion</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/paraphraser">Paraphraser</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/dashboard">Dashboard</SidebarLink>
        </SidebarLinkContainer>
      </Sidebar>
      <MainContent>
        <h1>Plagiarism Checker</h1>
        <InputOutputContainer>
          <InputTextArea
            value = {question}
            onChange = {(e)=> setQuestion(e.target.value)}
            placeholder="Enter your text to check for plagiarism..."
          />
          <ProcessButton onClick={generateAnswer}>Process</ProcessButton>
          <OutputTextArea value={answer} readOnly />
        </InputOutputContainer>
      </MainContent>
    </FeaturePageContainer>
  );
};

export default PlagiarismChecker;
