//@flow
import type { Action } from '../actions/types';

export type AppState = 'notLoggedIn' | 'loggedIn' | 'error';

type State = AppState;

export default function appState(state: AppState = 'notLoggedIn', action: Action): State {
  if (action.type !== 'SET_APP_STATE') return state;

  return action.appState;
}
