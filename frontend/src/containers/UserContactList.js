import { connect } from 'react-redux';

import { addConversation, setCurrentConversation } from '../store/actions';
import ContactList from '../components/ContactList';

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
        count: state.unreadMessagesIndicator
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onContactClick: contact => {
            //TODO: use a 'create' function
            const conversation = {
                id: Date.now(),
                state: 'open',
                contact
            };
            dispatch(addConversation(conversation));
            dispatch(setCurrentConversation(conversation));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactList);
