import AccessDenied from './AccessDenied';
import { routes } from 'app/config/routes';

describe('pages/errors/AccessDenied', () => {
  const wrapper = shallow(<AccessDenied />);

  it('should render a <div> with an id of "errors"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.props().id).to.equal('errors');
  });

  it('should render a single <main> element', () => {
    expect(wrapper.find('main')).to.have.length(1);
  });

  it(`should render a <Link> component which links to "${routes.home.path}"`, () => {
    expect(wrapper.find(`Link[to="${routes.home.path}"]`)).to.have.length(1);
  });
});
