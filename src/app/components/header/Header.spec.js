import Header from './Header';

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  it('should render a <header>', () => {
    expect(wrapper.type()).to.equal('header');
  });

  it('should render a single <nav>', () => {
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('should render a single <IndexLink> that links to "/"', () => {
    expect(wrapper.find('IndexLink[to="/"]')).to.have.length(1);
  });
});
