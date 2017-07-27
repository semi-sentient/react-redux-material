import Layout from './Layout';

describe('<Layout />', () => {
  const wrapper = shallow(<Layout />);

  it('should render a single <Header> component', () => {
    expect(wrapper.find('Header').length).to.equal(1);
  });

  it('should render a single <Footer> component', () => {
    expect(wrapper.find('Footer').length).to.equal(1);
  });
});
