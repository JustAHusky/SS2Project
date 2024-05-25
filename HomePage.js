import React from 'react';
import Header from '../components/Header';
import FeatureList from '../components/FeatureList';
import BenefitsList from '../components/BenefitsList';
import styled from 'styled-components';

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
      <Header />
      <h1>The ultimate writing aid: Improve your writing skills today!</h1>
      <FeatureList />
      <BenefitsList />
    </AppContainer>
  );
}

export default HomePage;
