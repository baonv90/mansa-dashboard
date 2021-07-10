import React from 'react';
import styled from 'styled-components';

import Profile from './templates/Profile';
import Company from './templates/Company';
import AccountInfo from './templates/AccountInfo';

import Block from './layout/Block';

const Dashboard = styled.div`
  display: flex;
  margin: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background: var(--white-color);
  height: calc(100vh - 5rem);
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  padding: 1.5rem .5rem;
  border-radius: 10px;
  height: 40vh;
  margin: .5rem .25rem;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const AccountContainer = styled.div`
  display: flex;
  width: 75%;
  padding: 1rem 0rem 1rem 1rem;
  flex-direction: column;
`;

const App = () => (
  <Dashboard>
    <UserContainer>
      <BlockContainer>
        <Profile />
      </BlockContainer>
      <BlockContainer>
        <Company />
      </BlockContainer>
    </UserContainer>

    <AccountContainer>
      <Block title='Accounts'>
        <AccountInfo />
      </Block>
    </AccountContainer>
  </Dashboard>
);

export default App;