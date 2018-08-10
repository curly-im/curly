import LinkButton from './LinkButton';

test('LinkButton', () => {
    it('should render label', () => {
        const label = 'test';
        const buttonLink = shallow(<LinkButton label={label}/>);

        expect(buttonLink.text()).toEqual(label);

    }); 

    it('should render', () => {
        const mockCallBack = jest.fn();
        const buttonLink = shallow(<button onClick={mockCallBack}></button>);

        buttonLink.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});