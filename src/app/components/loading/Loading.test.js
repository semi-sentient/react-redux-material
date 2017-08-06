import Loading from './Loading';

describe('app/components/loading/Loading', () => {
  it('should not render anything when isLoading:false', () => {
    const wrapper = shallow(<Loading isLoading={false} />);
    expect(wrapper.type()).to.be.null;
  });

  it('should render a <LinearProgress> component when isLoading:true', () => {
    const wrapper = shallow(<Loading isLoading />);
    expect(wrapper.find('LinearProgress').length).to.equal(1);
  });
});