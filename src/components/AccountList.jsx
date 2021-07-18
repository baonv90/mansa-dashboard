import React from 'react'
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  padding: .5rem;
  margin: 0 .5rem;
  background: ${({ isSelected }) => isSelected ?  'var(--primary-color)' : 'var(--grey-color)'};
  color: ${({ isSelected }) => isSelected ? 'white' : 'var(--text-color)'};
  min-width: 120px;
  min-height: 60px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const AccountType = styled.span`
  font-size: .6rem;
  line-height: .6rem;
  font-weight: 400;
`;

const AccountNumber = styled.span`
  font-weight: 600;
`;


const AccountList = ({ isSelected, onSelectTab, index, ...data }) => {
  const { account_number, account_type } = data;

  return (
    <Container
      onClick={() => onSelectTab(index)}
      isSelected={isSelected}
    >
      <AccountType>{account_type}</AccountType>
      <AccountNumber>{account_number}</AccountNumber>
    </Container>
  )
}

export default AccountList