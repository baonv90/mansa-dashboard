import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';


import { useFetchData } from '../hooks/useFetchData';
const data_source = 'https://randomuser.me/api/';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid var(--border-color);
`;

export const TitleName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin-bottom: .5rem;
`;

export const Info = styled.span`
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.25rem;
`;

// User profile from randomuser
const Profile = () => {
  const { data } = useFetchData(data_source);
  const userInfo = get(data, 'results[0]');

  const renderProfile = ({ phone, email, name, picture } = {}) => {
    const { first, last } = name;
    const displayName = first + ' ' + last;
    return <>
      <Picture src={picture ? picture.medium : ''} />
      <TitleName>{displayName}</TitleName>
      <Info>{email}</Info>
      <Info>{phone}</Info>
    </>
  };

  if (!userInfo) {
    return null;
  }

  return (
    <Container>
      {renderProfile(userInfo)}
    </Container>
  )
};

export default Profile;