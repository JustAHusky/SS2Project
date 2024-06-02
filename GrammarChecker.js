import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { main } from '../components/GrammarCheckerAPI';


const FeaturePageContainer = styled.div`
  display: flex;
  height: 100vh;
  border-color: #000000;
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
`;

const InputTextArea = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const OutputTextArea = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
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

const GrammarChecker = () => {
  const [inputText, setInputText] = React.useState('');
  const [outputText, setOutputText] = React.useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Placeholder function to call the grammar check API
  const callGrammarCheckAPI = () => {
    // Call your grammar check API here with inputText
    // Example:
    // axios.post('grammar-check-api-endpoint', { text: inputText })
    //   .then(response => {
    //     // Handle the response from the API
    //     setOutputText(response.data.result);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error:', error);
    //   });
  };

  const handleProcess = () => {
    // Placeholder logic for calling grammar check API
    callGrammarCheckAPI();
  };

  return (
    <FeaturePageContainer>
      <Sidebar>
        <SidebarLinkContainer>
          <SidebarLinkActive to="/grammar-checker">Grammar Checker</SidebarLinkActive>
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
        <h1>Grammar Checker</h1>
        <InputOutputContainer>
          <InputTextArea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text to check grammar..."
          />
          <ProcessButton onClick={handleProcess}>Process</ProcessButton>
          <OutputTextArea value={outputText} readOnly />
        </InputOutputContainer>
      </MainContent>
    </FeaturePageContainer>
  );
};

export default GrammarChecker;
