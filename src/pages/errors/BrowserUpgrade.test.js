import BrowserUpgrade from './BrowserUpgrade';

describe('pages/errors/BrowserUpgrade', () => {
  const wrapper = shallow(<BrowserUpgrade />);

  it('should render a <div> with an id of "errors"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.props().id).to.equal('errors');
  });

  it('should render a single <main> element', () => {
    expect(wrapper.find('main')).to.have.length(1);
  });
});
