import Message from './Message';

describe('<Message />', () => {
  const message = 'hello world';
  let wrapper = shallow(
    <Message
      isControl
      message={message}
      type="error"
    />
  );

  it('should render a <div> with class names of "control", "error", and "message"', () => {
    expect(wrapper.hasClass('control')).to.be.true;
    expect(wrapper.hasClass('error')).to.be.true;
    expect(wrapper.hasClass('message')).to.be.true;
  });

  it(`should contain "${message}" in the message body`, () => {
    expect(wrapper.text()).to.have.string(message);
  })

  it('should set state to { isVisible:false } when "x" is clicked', () => {
    wrapper.find('.close').simulate('click');
    expect(wrapper.state().isVisible).to.be.false;
  });

  it('should not show the "x" control when isControl={false}', () => {
    wrapper = shallow(
      <Message
        isControl={false}
        message={message}
        type="error"
      />
    );

    expect(wrapper.find('.close').length).to.equal(0);
  });
});
