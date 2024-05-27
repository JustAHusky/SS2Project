import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FeaturePageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
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
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition for background color change */
  &:hover {
    background-color: #e0f7fa; /* Light green background color on hover */
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  max-height: calc(100vh - 40px); /* 40px is the combined padding of 20px top and bottom */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds the height */
`;

const InputOutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
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
  width: 100px; /* Fixed width */
  padding: 10px 10px; /* Reduced padding */
  font-size: 14px; /* Smaller font size */
  background-color: #007bff;
  color: #fff;
  border: none;
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
          <SidebarLink to="/paraphraser">Paraphraser</SidebarLink>
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
