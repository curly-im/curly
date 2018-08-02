export default function contacts(state = [], action) {
    if (action.type !== 'SET_CONTACTS') return state;

    return action.contacts;
}
