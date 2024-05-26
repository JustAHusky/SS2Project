import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
  margin-top: 20px;
  list-style-type: none;
  padding: 0;
  width: 80%;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center; /* Center-align the content */
  margin: 5px 0;
  color: #4caf50;
`;

const CheckIcon = styled.span`
  font-size: 20px;
  margin-right: 10px;
`;

const benefits = [
  'Improve the accuracy and fluency of your writing.',
  'Save time and effort by automating editing tasks.',
  'Boost your writing confidence by eliminating errors and plagiarism.',
  'Improve your written communication skills in all areas.',
];

const BenefitsList = () => {
  return (
    <ListContainer>
      {benefits.map((benefit, index) => (
        <ListItem key={index}>
          <CheckIcon>✔</CheckIcon>
          {benefit}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default BenefitsList;
