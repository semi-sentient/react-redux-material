import Message from './Message';

describe('app/components/message/Message', () => {
  const message = 'hello world';

  it('should render a <div> containing class name "info" when type is empty or type="info"', () => {
    let wrapper = shallow(<Message type="info" />);
    expect(wrapper.hasClass('info')).to.be.true;

    wrapper = shallow(<Message />);
    expect(wrapper.hasClass('info')).to.be.true;
  });

  it('should render a <div> containing class name "error"', () => {
    const wrapper = shallow(<Message type="error" />);
    expect(wrapper.hasClass('error')).to.be.true;
  });

  it('should render a <div> containing class name "success"', () => {
    const wrapper = shallow(<Message type="success" />);
    expect(wrapper.hasClass('success')).to.be.true;
  });

  it('should render a <div> containing class name "warning"', () => {
    const wrapper = shallow(<Message type="warning" />);
    expect(wrapper.hasClass('warning')).to.be.true;
  });

  it(`should contain "${message}" in the message body`, () => {
    const wrapper = shallow(<Message>{message}</Message>);
    expect(wrapper.text()).to.have.string(message);
  });

  it('should set state to { isVisible:false } when "x" is clicked', () => {
    const wrapper = shallow(<Message isControl />);
    wrapper.find('.close').simulate('click');
    expect(wrapper.state().isVisible).to.be.false;
  });

  it('should show the "x" control when isControl={true}', () => {
    const wrapper = shallow(<Message isControl />);
    expect(wrapper.find('.close').length).to.equal(1);
  });

  it('should not show the "x" control when isControl={false}', () => {
    const wrapper = shallow(<Message isControl={false} />);
    expect(wrapper.find('.close').length).to.equal(0);
  });
});
