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
