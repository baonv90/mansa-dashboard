import React, { useState, useCallback } from 'react';
import styled from 'styled-components';


const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  overflow-y: scroll;
`;

// Tabs component display a TabNav component and its content based on the selected Tab
const Tabs = ({ children, TabNav }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const renderTitles = useCallback((items) => 
    items.map(({ props }, index) => (
      <TabNav
        key={index}
        index={index}
        isSelected={selectedTab === index}
        setSelectedTab={setSelectedTab}
        {...props}
      />
    )
  ), [setSelectedTab, selectedTab]);

  return (
    <TabsContainer>
      <Header>
        {renderTitles(children)}
      </Header>
      {children[selectedTab]}
    </TabsContainer>
  )
};

export default Tabs;
