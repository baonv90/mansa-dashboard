import renderer from 'react-test-renderer';
import Company from './Company';
import { TitleName } from './Profile';
import { useFetchData } from '../hooks/useFetchData';

jest.mock('../hooks/useFetchData');

describe('templates > Company', () => {
  const fakeData = {
    unite_legale: {
      denomination: 'Mansa',
      etablissement_siege: {
        date_creation: '01/01/2000',
        siret: '123457654765',
        geo_adresse: '1 Avenue de Paris, Paris, 75001'
      } 
    }
  };

  beforeEach(() => {
    useFetchData.mockReturnValue({
      loading: false,
      data: fakeData
    });
  });

  it('should match snapshot', async () =>  {
    const component = await renderer.create(<Company />);
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should pass data correctly', async () =>  {
    const tree = await renderer.create(<Company />);
    
    const title = tree.root.findByType(TitleName);
    expect(title.props.children).toEqual('Mansa');    
  });
});
