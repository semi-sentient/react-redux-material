import NavLink from './NavLink';

describe('app/components/layout/navLink/NavLink', () => {
  const defaultContext = {
    router: {
      route: {
        location: {
          pathname: '/'
        }
      }
    }
  };
  const testContext = {
    router: {
      route: {
        location: {
          pathname: '/test/location'
        }
      }
    }
  };

  const defaultLink = '/';
  const matchingLink = '/test';
  const nonMatchingLink = '/broken';
  const title = 'My Link';

  it('should render a <span> containing a single <Link> component', () => {
    const wrapper = shallow(<NavLink to={defaultLink} title={title} />, { context: defaultContext });

    expect(wrapper.type()).to.equal('span');
    expect(wrapper.find('Link').length).to.equal(1);
  });

  it('should contain "active-nav" class when link exactly matches default route "/"', () => {
    const wrapper = shallow(<NavLink to={defaultLink} title={title} />, { context: defaultContext });
    expect(wrapper.hasClass('active-nav')).to.be.true;
  });

  it('should contain "active-nav" class name when link partially matches current route', () => {
    // expects match on links containing "/test" ("/test", "/test/123", etc)
    const wrapper = shallow(<NavLink to={matchingLink} title={title} />, { context: testContext });
    expect(wrapper.hasClass('active-nav')).to.be.true;
  });

  it('should not contain "active-nav" class name when default link ("/") does not exactly match current route', () => {
    const wrapper = shallow(<NavLink to={defaultLink} title={title} />, { context: testContext });
    expect(wrapper.hasClass('active-nav')).to.be.false;
  });

  it('should not contain "active-nav" class name when link is not default ("/") and does not partially match route', () => {
    const wrapper = shallow(<NavLink to={nonMatchingLink} title={title} />, { context: defaultContext });
    expect(wrapper.hasClass('active-nav')).to.be.false;
  });

  it('should contain "disabled" class name on the <Link> component when isDisabled:true', () => {
    const wrapper = shallow(<NavLink to={defaultLink} title={title} isDisabled />, { context: defaultContext });
    expect(wrapper.find('Link').hasClass('disabled')).to.be.true;
  });

  it('should not contain "disabled" class name on the <Link> component when isDisabled:false', () => {
    const wrapper = shallow(<NavLink to={defaultLink} title={title} isDisabled={false} />, { context: defaultContext });
    expect(wrapper.find('Link').hasClass('disabled')).to.be.false;
  });

  it('should render an <a> with the href and target properly set', () => {
    const wrapper = shallow(<NavLink href="//www.google.com" target="_blank" title={title} />, { context: defaultContext });
    expect(wrapper.find('a').length).to.equal(1);
  });

  it('should call onClick handler when <Link> item is clicked', () => {
    const mockOnClick = sinon.spy();
    const wrapper = shallow(<NavLink to={defaultLink} title={title} onClick={mockOnClick} />, { context: defaultContext });

    wrapper.find('Link').simulate('click');

    expect(mockOnClick.calledOnce).to.be.true;
  });

  // TODO test passing on onClick and spy on whether or not it was called
});
