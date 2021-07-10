import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import { useFetchData } from '../hooks/useFetchData';
import { TitleName, Info } from './Profile';

const data_source = 'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
`;

// Company information from entreprise.data.gouv
const Company = () => {
  const { data } = useFetchData(data_source);
  const companyInfo = get(data, 'unite_legale');

  const renderInfo = (companyInfo) => {
    const {
      denomination,
      etablissement_siege: {
        date_creation,
        siret,
        geo_adresse
      } 
    } = companyInfo || {};
  
    return <>
      <TitleName>{denomination}</TitleName>
      <Info>Siret: {siret}</Info>
      <Info>Date Creation: {date_creation}</Info>
      <Info>Adresse: {geo_adresse}</Info>
    </>;
  };

  if (!companyInfo) {
    return null;
  }
  
  return (
    <Container>
      {renderInfo(companyInfo)}
    </Container>
  )
};

export default Company;