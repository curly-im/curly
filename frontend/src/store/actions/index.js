export const setAppState = appState => ({
  type: 'SET_APP_STATE',
  appState
});

export const setContacts = contacts => ({
  type: 'SET_CONTACTS',
  contacts
});

export const setCurrentUser = currentUser => ({
  type: 'SET_CURRENT_USER',
  currentUser
});

export const addConversation = conversation => ({
  type: 'ADD_CONVERSATION',
  conversation
});

export const setCurrentConversation = conversation => ({
  type: 'SET_CURRENT_CONVERSATION',
  conversation
});

export function setIceServers(iceServers) {
    return {
        type: 'SET_ICE_SERVERS',
        iceServers
    };
}

export function message({ contactId, message }) {
    return {
        type: 'MESSAGE',
        sender: contactId,
        message
    };
}

export function setUnreadMessagesIndicator({ contactId, count }) {
    return {
        type: 'SET_UNREAD_MESSAGES_INDICATOR',
        contactId,
        count
    };
}

export function clearUnreadMessagesIndicator({ contactId }) {
    return {
        type: 'CLEAR_UNREAD_MESSAGES_INDICATOR',
        contactId
    };
}

export function incrementUnreadMessagesIndicator({ contactId }) {
    return {
        type: 'INCREMENT_UNREAD_MESSAGES_INDICATOR',
        contactId
    };
}

export function decrementUnreadMessagesIndicator({ contactId }) {
    return {
        type: 'DECREMENT_UNREAD_MESSAGES_INDICATOR',
        contactId
    };
}
