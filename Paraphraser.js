import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const ParaphraseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ParaphraseItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
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

const Paraphraser = () => {
  const [inputText, setInputText] = React.useState('');
  const [paraphrasedTexts, setParaphrasedTexts] = React.useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleProcess = () => {
    // Mock paraphrasing logic - in a real app, you would call a paraphrasing API here
    const paraphrases = [
      `Paraphrased version 1 of: ${inputText}`,
      `Paraphrased version 2 of: ${inputText}`,
      `Paraphrased version 3 of: ${inputText}`,
    ];
    setParaphrasedTexts(paraphrases);
  };

  return (
    <FeaturePageContainer>
      <Sidebar>
        <SidebarLinkContainer>
          <SidebarLink to="/grammar-checker">Grammar Checker</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/plagiarism-checker">Plagiarism Checker</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/text-completion">Text Completion</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLinkActive to="/paraphraser">Paraphraser</SidebarLinkActive>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to="/dashboard">Dashboard</SidebarLink>
        </SidebarLinkContainer>
      </Sidebar>
      <MainContent>
        <h1>Paraphraser</h1>
        <InputOutputContainer>
          <InputTextArea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text to paraphrase..."
          />
          <ProcessButton onClick={handleProcess}>Process</ProcessButton>
          <ParaphraseList>
            {paraphrasedTexts.map((text, index) => (
              <ParaphraseItem key={index}>{text}</ParaphraseItem>
            ))}
          </ParaphraseList>
        </InputOutputContainer>
      </MainContent>
    </FeaturePageContainer>
  );
};

export default Paraphraser;
