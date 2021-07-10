import renderer from 'react-test-renderer';
import Tabs from './Tabs';

describe('layout > Tabs', () => {
  const children = [
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>
  ];
  const TabNav = ({ title }) => <span>{title}</span>;

  it('should match snapshot', () =>  {
    const component = renderer.create(
      <Tabs TabNav={TabNav}>
        {children}
      </Tabs>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const els = component.root.findAllByType(TabNav);
    expect(els).toHaveLength(children.length);
  });
});
