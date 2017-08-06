import { Layout } from './Layout';

describe('app/components/layout/Layout', () => {
  const wrapper = shallow(<Layout />);

  it('should render a <Header> component', () => {
    expect(wrapper.find('Header').length).to.equal(1);
  });

  it('should render a <div> with id="main"', () => {
    expect(wrapper.find('div[id="main"]').length).to.equal(1);
  });

  it('should render a <Footer> component', () => {
    expect(wrapper.find('Footer').length).to.equal(1);
  });
});
