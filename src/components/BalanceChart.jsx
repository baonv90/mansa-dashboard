import React from 'react'
import styled from 'styled-components';
import Trend from 'react-trend';

const Container = styled.div`
  padding: .5rem;
  border-radius: 10px;
  background: var(--grey-color);
  margin-top: 1.5rem;
`;

const Chart = styled(Trend)`
  max-width: 100%;
`;

// Component to display chart related to transactions
const BalanceChart = ({ data = [] }) => (
  <Container>
    <Chart
      data={data}
      smooth
      gradient={['var(--out-color)', 'var(--in-color)']}
      radius={10}
      autoDraw
      autoDrawDuration={1500}
      autoDrawEasing="ease-in"
      strokeWidth={3}
      strokeLinecap={'round'}
      width={300}
      height={200}
    />
  </Container>
);

export default BalanceChart;