import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 20px;
  justify-content: center;
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
    title: 'Text Completion',
    description: 'Complete text. Get writing suggestions to complete sentences and paragraphs seamlessly.',
    color: 'green',
  },
  {
    title: 'Paraphraser',
    description: 'Rephrase text. Rewrite complete sentences in a number of ways to improve your writing and gain a new perspective.',
    color: 'orange',
  },
];

const ScaledFeatureCard = styled(FeatureCard)`
  transform: scale(2);
`;

function FeatureList() {
  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <ScaledFeatureCard key={index} feature={feature} />
      ))}
    </FeaturesContainer>
  );
}

export default FeatureList;
