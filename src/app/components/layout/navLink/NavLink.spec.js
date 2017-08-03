import NavLink from './NavLink';

describe('<NavLink />', () => {
  const context = {
    router: {
      getCurrentLocation() {
        return {
          pathname: 'my/test/location'
        };
      }
    }
  };
  const evt = {
    preventDefault() {}
  };
  const wrapper1 = shallow(<NavLink to="/test" />, { context });
  const wrapper2 = shallow(<NavLink to="/blah" isDisabled />, { context });

  it('should render a <li> with a single <Link> component', () => {
    const link = wrapper1.find('Link');
    expect(wrapper1.type()).to.equal('li');
    expect(link.length).to.equal(1);
    link.simulate('click', evt); // for test coverage purposes -- ensures all paths are taken
  });

  it('should contain "active-nav" class name when link matches current path', () => {
    expect(wrapper1.hasClass('active-nav')).to.be.true;
  });

  it('should contain "disabled" class name on the <Link> component when isDisabled:true', () => {
    const link = wrapper2.find('Link');
    expect(link.hasClass('disabled')).to.be.true;
    link.simulate('click', evt); // for test coverage purposes -- ensures all paths are taken
  });

  it('should not contain "active-nav" class name when link does not match current path', () => {
    expect(wrapper2.hasClass('active-nav')).to.be.false;
  });
});
