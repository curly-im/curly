function set(state, action) {
    return new Map(
        ...state,
        [ action.contactId, action.count ]
    );
}

function clear(state, action) {
    return new Map(state).delete(action.contactId);
}

function increment(state, action) {
    const copy = new Map(state);
    const currentCount = copy.get(action.contactId) || 0;

    copy.set(action.contactId, currentCount + 1);

    return copy;
}

function decrement(state, action) {
    const copy = new Map(state);
    const currentCount = copy.get(action.contactId) || 0;

    copy.set(action.contactId, currentCount - 1);

    return copy;
}

export default function unreadMessagesIndicator(state = new Map(), action) {
    const supportedActions = new Map([
        [ 'SET_UNREAD_MESSAGES_INDICATOR', set ],
        [ 'CLEAR_UNREAD_MESSAGES_INDICATOR', clear ],
        [ 'INCREMENT_UNREAD_MESSAGES_INDICATOR', increment ],
        [ 'DECREMENT_UNREAD_MESSAGES_INDICATOR', decrement ]
    ]);
    const selectedAction = supportedActions.get(action.type);

    if (typeof selectedAction !== 'function') return state;

    return selectedAction(state, action);
}
