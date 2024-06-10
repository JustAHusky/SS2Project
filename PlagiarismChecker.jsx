import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import AlertDialogSlide from '../components/UserAlert';

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
`;

const InputTextArea = styled.textarea`
  width: 90%;
  height: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  font-size: 16px;
`;

const OutputTextArea = styled.textarea`
  width: 90%;
  height: 250px;
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

function PlagiarismChecker({ user }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isUser, setIsUser] = useState(false);
  const accessToken = localStorage.getItem('user');
  useEffect(() => {
    if (accessToken) {
      setIsUser(true);
    }
    else {
      setIsUser(false);
    }
  }, [])

  async function generateAnswer() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAECJjA7roZz7xaDpLTgpqMxow0WI4jaGc",
        method: "POST",
        data: {
          contents: [
            { parts: [{ text: "Check the input text for plagiarism. The app will analyze the input text and compare it with other documents on the internet. The app will then provide a percentage of how much of the text matches other documents, as well as links to those documents: " + question }] }
          ],
        },
      });
      const generatedAnswer = response.data.candidates[0].content.parts[0].text;
      setAnswer(generatedAnswer);

      saveActivityToDatabase(question, generatedAnswer);
    } 
    catch (error) {
      console.error('Error generating answer:', error);
    }
  }

  async function saveActivityToDatabase(question, generatedAnswer) {
    if (!user || !user.name) {
      console.error('User information is not available');
      return;
    }

    try {
      await axios.post('http://localhost:3080/api/activity', {
        user: user.name,
        activityType: "Plagiarism Checking",
        question: question,
        answer: generatedAnswer
      });
      console.log('Activity history saved to the database.');
    } catch (error) {
      console.error('Error saving activity history to the database:', error);
    }
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
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter text to check for plagiarism..."
          />
          {isUser && <ProcessButton onClick={generateAnswer}>Process</ProcessButton>}
          <div>{isUser ? '' : <AlertDialogSlide onClick={generateAnswer}></AlertDialogSlide>}</div>
          <OutputTextArea value={answer} readOnly />
        </InputOutputContainer>
      </MainContent>
    </FeaturePageContainer>
  );
}

export default PlagiarismChecker;
