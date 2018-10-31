import React from 'react';
import {shallow} from 'enzyme';

import Button from './Button';

test('Button', () => {

    it("should render button", () => {
        const variant = 'primary';

        const button = shallow(<Button variant={variant} />)
   
        expect(button.hasClass('primary').toEqual(true));
    });

    it("should render text", () => {
        const buttonText = 'test';
        const button = shallow(<Button> {buttonText} </Button> )

        expect(button.text().toEqual(buttonText));
    });
})