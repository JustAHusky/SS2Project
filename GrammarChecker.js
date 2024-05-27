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
  flex-direction: column; /* Change to column layout */
  gap: 20px; /* Add gap between elements */
`;

const InputTextArea = styled.textarea`
  width: 100%;
  height: 200px; /* Reduce height */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const OutputTextArea = styled.textarea`
  width: 100%;
  height: 200px; /* Reduce height */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
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
