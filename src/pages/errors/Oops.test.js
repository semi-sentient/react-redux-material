import Oops from './Oops';

describe('pages/errors/Oops', () => {
  const wrapper = shallow(<Oops />);

  it('should render a <div> with an id of "errors"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.props().id).to.equal('errors');
  });

  it('should render a single <a> element that goes back to the previous page', () => {
    const link = wrapper.find('a[href="/"]');
    expect(link.length).to.equal(1);

    // ensures that all branches are tested -- although there is nothing to assert here
    /*link.simulate('click', {
      preventDefault() {}
    });*/
  });

  it('should render a <Link> component that points to the home page', () => {
    expect(wrapper.find('Link[to="/"]')).to.have.length(1);
  });
});
