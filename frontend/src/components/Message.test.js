import Message from './Message';
import {shallow} from 'enzyme';

const contact = {
    name: 'Test'
};
const message = {
    content: 'Test message'
};

test('Message', () => {
    it('should render sender name', () => {
        const message = shallow(<Message message={message} contact={contact} />);

        expect(message.find('span')[0].text()).toEqual(contact.name);
    });

    it('should render message content', () => {
        const message = shallow(<Message message={message} contact={contact} />);

        expect(message.find('div')[0].text()).toEqual(message.content);
    });
});
