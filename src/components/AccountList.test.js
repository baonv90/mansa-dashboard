import renderer from 'react-test-renderer';
import AccountList, { Container } from './AccountList';

describe('component > AccountList', () => {
  it('should match snapshot', () =>  {
    const component = renderer.create(
      <AccountList />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  });

  it('should call set selected tab onClick', () =>  {
    const props = {
      setSelectedTab: jest.fn()
    };
    const component = renderer.create(
      <AccountList {...props} />,
    );

    const el = component.root.findByType(Container);
    el.props.onClick();

    expect(props.setSelectedTab).toHaveBeenCalled();
  });
});