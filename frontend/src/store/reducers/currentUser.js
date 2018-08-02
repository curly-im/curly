//@flow
import type { Action } from '../actions/types';
import type { User } from '../../lib/user';

type State = User | Object;

export default function currentUser(state: State = {}, action: Action): State {
  if (action.type !== 'SET_CURRENT_USER') return state;

  return action.currentUser;
}