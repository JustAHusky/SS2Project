import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router-dom';

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
    route: '/grammar-checker', // Specify the route for Grammar Checker
  },
  {
    title: 'Plagiarism Checker',
    description: 'Avoid Plagiarism. Analyze the text and compare it with other documents on the internet to avoid plagiarism.',
    color: 'purple',
    route: '/plagiarism-checker', // Specify the route for Plagiarism Checker
  },
  {
    title: 'Text Completion',
    description: 'Complete text. Get writing suggestions to complete sentences and paragraphs seamlessly.',
    color: 'green',
    route: '/text-completion', // Specify the route for Text Completion
  },
  {
    title: 'Paraphraser',
    description: 'Rephrase text. Rewrite complete sentences in a number of ways to improve your writing and gain a new perspective.',
    color: 'orange',
    route: '/paraphraser', // Specify the route for Paraphraser
  },
];

const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color */
`;

const ScaledFeatureCard = styled(FeatureCard)`
  transform: scale(2);
`;

function FeatureList() {
  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <StyledLink key={index} to={feature.route}>
          <ScaledFeatureCard feature={feature} />
        </StyledLink>
      ))}
    </FeaturesContainer>
  );
}

export default FeatureList;
