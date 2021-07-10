import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  color: var(--title-color);
  font-size: 1.25rem;
  line-height: 1.25rem;
  font-weight: 800;
`;

// Block component with a title and its contents
const Block = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

export default Block;