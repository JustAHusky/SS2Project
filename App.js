import React from 'react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';
import BenefitsList from './components/BenefitsList';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const features = [
  {
    title: 'Grammar Checker',
    description: 'Fix mistakes. Highlight and correct grammar, spelling, and punctuation errors instantly.',
    color: 'red',
  },
  {
    title: 'Plagiarism Checker',
    description: 'Avoid Plagiarism. Analyze the text and compare it with other documents on the internet to avoid plagiarism.',
    color: 'purple',
  },
  {
    title: 'Text completion',
    description: 'Complete text. Get writing suggestions to complete sentences and paragraphs seamlessly.',
    color: 'green',
  },
  {
    title: 'Paraphraser',
    description: 'Rephrase text. Rewrite complete sentences in a number of ways to improve your writing and gain a new perspective.',
    color: 'orange',
  },
];

function App() {
  return (
    <AppContainer>
      <Header />
      <h1>The ultimate writing aid: Improve your writing skills today!</h1>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </FeaturesContainer>
      <BenefitsList />
    </AppContainer>
  );
}

export default App;
