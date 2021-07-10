import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('should match snapshot', async () =>  {
    const component = await renderer.create(<App />);
    
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
