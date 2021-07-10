import renderer from 'react-test-renderer';
import Transactions, { Item } from './Transactions';

describe('Transactions', () => {
  const props = {
    data: [
      {
        timestamp: '2021/08/07 11:40:33',
        amount: 11, 
        currency: 'GBP', 
        transaction_category: 'DEBIT',
        transaction_type: 'ATM'
      }, {
        timestamp: '2021/08/07 11:40:33',
        amount: 11, 
        currency: 'GBP', 
        transaction_category: 'DEBIT',
        transaction_type: 'ATM'
      }
    ]
  };

  it('should match snapshot', () =>  {
    const component = renderer.create(
      <Transactions {...props} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  });

  it('should render correctly number of transactions', () =>  {
    const component = renderer.create(
      <Transactions {...props} />,
    );
    
    const els = component.root.findAllByType(Item);
    expect(els).toHaveLength(props.data.length);
  });
});