import React from 'react';
import {shallow} from 'enzyme';

import MessageInputCodeEditor from './MessageInputCodeEditor';

let messageInputCodeEditor = null;

beforeEach(() => {

});

test('MessageInputCodeEditor', () => {
    it('should emit on visibility change', () => {
        let visible;

        const onVisiblityChange = state => visible = state;
        const messageInputCodeEditor = shallow(
            <MessageInputCodeEditor
                isVisible={true}
                language="JavaScript"
                onVisibilityChange={onVisibilityChange} />
        );

        messageInputCodeEditor.find('span').simulate('click'); //click to show
        expect(visible).toEqual(true);

        messageInputCodeEditor.find('[data-test-close-button]').simulate('click'); //click to hide
        expect(visible).toEqual(false);

    });
});
