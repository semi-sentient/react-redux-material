import Footer from './Footer';

describe('app/components/layout/footer/Footer', () => {
  const wrapper = shallow(<Footer />);

  it('should render a <footer> element', () => {
    expect(wrapper.type()).to.equal('footer');
  });
});
