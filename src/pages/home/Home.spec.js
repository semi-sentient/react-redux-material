import Home from './Home';

describe('<Home />', () => {
  const wrapper = shallow(<Home />);

  it('should render a <div> with an id of "home"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.props().id).to.equal('home');
  });

  it('should render a single <Banner> component', () => {
    expect(wrapper.find('Banner').length).to.equal(1);
  });

  it('should render a single <div> element with a class name of "container"', () => {
    expect(wrapper.find('div[className="container"]').length).to.equal(1);
  });
});
