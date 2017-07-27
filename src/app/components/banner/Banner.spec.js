import Banner from './Banner';

describe('<Banner />', () => {
  const title = 'My Title';
  let wrapper = shallow(<Banner title={title} />);
  let node;

  it('should render a <div> with an id of "banner"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.props().id).to.equal('banner');
  });

  it('should render a single <div> with a class name of "container"', () => {
    node = wrapper.find('div[className="container"]')
    expect(node.length).to.equal(1);
  });

  it('should render a single <div> with a class name of "header-area" inside of "container"', () => {
    node = node.find('div[className="header-area"]');
    expect(node.length).to.equal(1);
  });

  it('should render a single <div> with a class name of "title" inside of "header-area"', () => {
    node = node.find('div[className="title"]');
    expect(node.length).to.equal(1);
  });

  wrapper = shallow(<Banner isLoading title={title} />);

  it('should render a single <LinearProgress> component', () => {
    expect(wrapper.find('LinearProgress').length).to.equal(1);
  });

});
