//@flow
import type { Action } from '../actions/types';

export type Contact = {
  name: string
};

type State = Array<Contact>;

export default function contacts(state = [], action: Action): State {
  if (action.type !== 'SET_CONTACTS') return state;

  return action.contacts;
}