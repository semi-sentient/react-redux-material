import NavLink from './NavLink';

describe('app/components/layout/navLink/NavLink', () => {
  const context = {
    router: {
      route: {
        location: {
          pathname: 'my/test/location'
        }
      }
    }
  };
  const evt = {
    preventDefault() {}
  };
  const wrapper1 = shallow(<NavLink to="/test" />, { context });
  const wrapper2 = shallow(<NavLink to="/blah" isDisabled />, { context });

  it('should render a <span> containing a single <Link> component', () => {
    const wrapper = shallow(<NavLink to="/test" />, { context });

    expect(wrapper.type()).to.equal('span');
    expect(wrapper.find('Link').length).to.equal(1);
  });

  it('should contain "active-nav" class name when link matches current path', () => {
    const wrapper = shallow(<NavLink to="/test" />, { context });
    expect(wrapper.hasClass('active-nav')).to.be.true;
    // wrapper.find('Link').simulate('click', evt);
  });

  it('should not contain "active-nav" class name when link does not match current path', () => {
    const wrapper = shallow(<NavLink to="/blah" />, { context });
    expect(wrapper.hasClass('active-nav')).to.be.false;
  });

  it('should contain "disabled" class name on the <Link> component when isDisabled:true', () => {
    const wrapper = shallow(<NavLink to="/test" isDisabled />, { context });
    expect(wrapper.find('Link').hasClass('disabled')).to.be.true;
  });

  it('should not contain "disabled" class name on the <Link> component when isDisabled:false', () => {
    const wrapper = shallow(<NavLink to="/test" isDisabled={false} />, { context });
    expect(wrapper.find('Link').hasClass('disabled')).to.be.false;
  });
});
