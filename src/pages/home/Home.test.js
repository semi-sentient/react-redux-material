import Home from './Home';

describe('pages/home/Home', () => {
    const wrapper = shallow(<Home />);

    it('should render a <div> with an id of "home"', () => {
        expect(wrapper.type()).to.equal('div');
        expect(wrapper.props().id).to.equal('home');
    });

    it('should render a single <main> element', () => {
        expect(wrapper.find('main')).to.have.length(1);
    });

    it('should render a single <aside> element', () => {
        expect(wrapper.find('aside')).to.have.length(1);
    });

    describe('<main>', () => {
        const main = wrapper.find('main');

        it('should render a <GettingStarted> component', () => {
            expect(main.find('GettingStarted')).to.have.length(1);
        });

        it('should render a <WebDevGuidelines> component', () => {
            expect(main.find('WebDevGuidelines')).to.have.length(1);
        });

        it('should render a <DevStack> component', () => {
            expect(main.find('DevStack')).to.have.length(1);
        });

        it('should render a <TestStack> component', () => {
            expect(main.find('TestStack')).to.have.length(1);
        });

        it('should render a <ErrorPages> component', () => {
            expect(main.find('ErrorPages')).to.have.length(1);
        });

        it('should render a <FormDemo> component', () => {
            expect(main.find('FormDemo')).to.have.length(1);
        });

        it('should render a <MessagesDemo> component', () => {
            expect(main.find('MessagesDemo')).to.have.length(1);
        });
    });

    describe('<aside>', () => {
        const aside = wrapper.find('aside');

        it('should render a <Paper> component', () => {
            expect(aside.find('Paper')).to.have.length(1);
        });
    });
});
