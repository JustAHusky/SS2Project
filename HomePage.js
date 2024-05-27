import React from 'react';
import styled from 'styled-components';
import FeatureList from '../components/FeatureList';
import BenefitsList from '../components/BenefitsList';// Import Link from react-router-dom

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

function HomePage() {
  return (
    <AppContainer>
      <h1>The ultimate writing aid: Improve your writing skills today!</h1>
      <FeatureList />
      <BenefitsList />
    </AppContainer>
  );
}

export default HomePage;