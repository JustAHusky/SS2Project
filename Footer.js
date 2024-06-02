import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 500px; /* Adjust the height as needed */
  background-color: #e8f4d9;
  border-top: 1px solid #e0e0e0;
  border-color: #000000;
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* Footer with no content */}
    </FooterContainer>
  );
};

export default Footer;
