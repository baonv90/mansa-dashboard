import renderer from 'react-test-renderer';
import Profile from './Profile';
import { TitleName } from './Profile';
import { useFetchData } from '../hooks/useFetchData';

jest.mock('../hooks/useFetchData');

describe('templates > Company', () => {
  const fakeData = {
    results: [{
      name: {
        first: 'Goku',
        last: 'Son'
      },
      phone: '123456789',
      email: 'Gohan@Chichi.kame'
    }]
  };

  beforeEach(() => {
    useFetchData.mockReturnValue({
      loading: false,
      data: fakeData
    });
  });

  it('should match snapshot', async () =>  {
    const component = await renderer.create(<Profile />);
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should pass data correctly', async () =>  {
    const tree = await renderer.create(<Profile />);
    
    const title = tree.root.findByType(TitleName);
    expect(title.props.children).toEqual('Goku Son');    
  });
});
