import React from 'react';
import styled from 'styled-components';

import Tabs from '../layout/Tabs';
import Tab from '../layout/Tab';
import AccountDetail from './AccountDetail';
import AccountList from '../components/AccountList';
import { useFetchData } from '../hooks/useFetchData';

export const data_source = 'https://kata.getmansa.com/accounts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Component to display all accounts and its detail
const AccountInfo = () => {
  const { data } = useFetchData(data_source);

  if (!data) {
    return null;
  }

  return (
    <Container>
      <Tabs TabNav={AccountList}>
        {
          (data || []).map((dat, index) => 
          <Tab key={`tab${index}`} {...dat}>
            <AccountDetail {...dat} />
          </Tab>)
        }
      </Tabs>
    </Container>
  )
};

export default AccountInfo;
