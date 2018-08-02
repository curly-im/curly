export default function iceServers(state=[], action) {
    if (action.type !== 'SET_ICE_SERVERS') return state;

    return action.iceServers;
}
