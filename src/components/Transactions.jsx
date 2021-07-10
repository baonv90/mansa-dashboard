import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Item = styled.div`
  display: flex;
  font-size: .825rem;
  line-height: 1.25rem;
  align-items: center;
  padding: .5rem;
  margin-right: 1rem;
  border-bottom: 1px solid var(--grey-color);
`;

const Header = styled(Item)`
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
`;

const Info = styled.div`
  width: 25%;
`;

const Amount = styled.div`
  width: 25%;
  display: flex;
  color: ${({ moneyIn, header }) => header 
    ? 'var(--title-color)' 
    : moneyIn ? 'var(--in-color)' : 'var(--out-color)'};
  justify-content: flex-end;
  font-weight: 600;
`;

// Simple text format
const formatText = (str) => {
  return str && str.replace('_', ' ').toLowerCase();
};

// Transaction history
const Transactions = ({ data }) => {
  return (
    <>
      <Header>
        <Info>Date</Info>
        <Info>Type</Info>
        <Info>Category</Info>
        <Amount header={true}>Amount</Amount>
      </Header>
      <Container>
        {(data || []).map((dat, index) => {
          const { timestamp, amount, currency, transaction_category, transaction_type } = dat;
          const displayDate = timestamp.slice(0, timestamp.indexOf(' '));

          return (
            <Item key={`transaction-${index}`}>
              <Info>{displayDate}</Info>
              <Info>{formatText(transaction_type)}</Info>
              <Info>{formatText(transaction_category)}</Info>
              <Amount moneyIn={amount >= 0}>{amount}{currency === 'GBP' ? '£' : currency}</Amount>
            </Item>
          );
        })}
      </Container>
    </>
  );
};

export default Transactions;