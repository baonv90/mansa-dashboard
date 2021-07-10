import React from 'react'
import styled from 'styled-components';

import Block from '../layout/Block';
import BalanceChart from '../components/BalanceChart';
import Transactions from '../components/Transactions';
import { useFetchData } from '../hooks/useFetchData';
import { data_source } from './AccountInfo';

// For testing purpose, the start and end dates are fixed
const from = new Date('01 January 2019 00:00 UTC').toISOString();
const to = new Date('01 June 2019 00:00 UTC').toISOString();

const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
  max-height: 60vh;
`;

const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const TransactionsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 1rem;
`;

const Balance = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 1rem;
`;

const AccountBalance = styled.span`
  font-size: 2rem;
  line-height: 1.5rem;
  font-weight: 800;
`;

const Currency = styled.span`
  font-size: .8rem;
  line-height: .8rem;
  font-weight: 400;
  margin-left: .25rem;
`;

// Component to display current balance, balance chart, transaction history of one account
const AccountDetail = (props) => {
  const { available, currency, account_id } = props;
  const { data } = useFetchData(data_source + '/' + account_id + '/transactions?from=' + from + '&to=' + to);

  if (!data) {
    return null;
  }

  const chartData = (data || []).map(dat => dat.amount);

  return (
    <Container>
      <BalanceWrapper>
        <Block title='Current Balance'>
          <Balance>
            <AccountBalance>{available}</AccountBalance>
            <Currency>{currency}</Currency>
          </Balance>
        </Block>
        {chartData && chartData.length && <BalanceChart data={chartData} />}
      </BalanceWrapper>
      <TransactionsWrapper>
        <Block title='Transactions'>
          <Transactions data={data || []}/>
        </Block>
      </TransactionsWrapper>
    </Container>
  );
};

export default AccountDetail;
