import renderer from 'react-test-renderer';
import AccountDetail from './AccountDetail';
import Transactions from '../components/Transactions';
import BalanceChart from '../components/BalanceChart';

import { useFetchData } from '../hooks/useFetchData';

jest.mock('../hooks/useFetchData');
jest.mock('../components/BalanceChart')

describe('templates > AccountDetail', () => {
  const fakeData = [{
    timestamp: '10/10/2021',
    amount: 10,
    transaction_type: 'DEBIT',
    transaction_category: 'DEBIT'
  }];

  beforeEach(() => {
    useFetchData.mockReturnValue({
      loading: false,
      data: fakeData
    });

    BalanceChart.mockReturnValue(() => <div>chart</div>);
  });

  it('should match snapshot', async () =>  {
    const component = await renderer.create(
      <AccountDetail />,
    );
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should pass data correctly to Transactions', async () =>  {
    const tree = await renderer.create(
      <AccountDetail />,
    );
    
    const transactions = tree.root.findByType(Transactions);
    expect(transactions.props.data).toEqual(fakeData);
  });
});
