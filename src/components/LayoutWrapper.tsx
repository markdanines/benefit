import React, { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutWrapperDiv = styled.div`
  width: 80%;
  max-width: 1400px;
  margin: auto;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return <LayoutWrapperDiv>{children}</LayoutWrapperDiv>;
};

export default LayoutWrapper;
