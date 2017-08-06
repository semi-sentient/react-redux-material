import Header from './Header';

describe('app/components/layout/header/Header', () => {
  const wrapper = shallow(<Header />);

  it('should render a <header> element', () => {
    expect(wrapper.type()).to.equal('header');
  });

  it('should render a <nav> element with two <NavLink> components', () => {
    const nav = wrapper.find('nav');

    expect(nav.length).to.equal(1);
    expect(nav.find('NavLink').length).to.equal(2);
  });
});
