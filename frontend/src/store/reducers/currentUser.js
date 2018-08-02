export default function currentUser(state = {}, action) {
    if (action.type !== 'SET_CURRENT_USER') return state;

    return action.currentUser;
}
