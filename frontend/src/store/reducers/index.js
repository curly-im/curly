import { combineReducers } from 'redux';

import appState from './appState';
import contacts from './contacts';
import currentUser from './currentUser';
import conversations from './conversations';
import messages from './messages';
import iceServers from './ice_servers';
import unreadMessagesIndicator from './unread_message_indicator';

export default combineReducers({
    appState,
    contacts,
    currentUser,
    conversations,
    messages,
    iceServers,
    unreadMessagesIndicator
});
