import renderer from 'react-test-renderer';
import AccountInfo from './AccountInfo';
import AccountList from '../components/AccountList';
import { useFetchData } from '../hooks/useFetchData';
import AccountDetail from './AccountDetail';

jest.mock('../hooks/useFetchData');
jest.mock('./AccountDetail');


describe('templates > AccountInfo', () => {
  const fakeData = [{
      account_id: '1'
    }, {
      account_id: '2'
    }, {
      account_id: '3'
    }
  ];

  beforeEach(() => {
    useFetchData.mockReturnValue({
      loading: false,
      data: fakeData
    });

    AccountDetail.mockReturnValue(() => <div>test</div>);
  });

  it('should match snapshot', async () =>  {
    const component = await renderer.create(
      <AccountInfo />,
    );
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should pass data correctly to Transactions', async () =>  {
    const tree = await renderer.create(
      <AccountInfo />,
    );
    
    const tabs = tree.root.findAllByType(AccountList);
    expect(tabs).toHaveLength(fakeData.length);
  });
});
