export default function appState(state = 'notLoggedIn', action) {
  if (action.type !== 'SET_APP_STATE') return state;

  return action.appState;
}
