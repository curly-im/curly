import LinkButton from './LinkButton';

test('LinkButton', () => {
    it('should render label', () => {
        const label = 'test';
    const buttonLink = shallow(<LinkButton label={label}/>);

    expect(buttonLink.text()).toEqual(label);

    }) 
})