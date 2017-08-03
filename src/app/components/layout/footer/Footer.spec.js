import Footer from './Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('should render a <footer>', () => {
    expect(wrapper.type()).to.equal('footer');
  });
});
