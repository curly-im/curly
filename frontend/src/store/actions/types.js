// @flow

import type { AppState } from '../reducers/appState';
import type { Contact } from '../reducers/contacts';
import type { User } from '../../lib/user';
import type { Conversation } from '../../lib/conversation';

export type Action = 
  { type: 'SET_APP_STATE', appState: AppState }
  | { type: 'SET_CONTACTS', contacts: Array<Contact> }
  | { type: 'SET_CURRENT_USER', currentUser: User }
  | { type: 'ADD_CONVERSATION', conversation: Conversation }
  | { type: 'SET_CURRENT_CONVERSATION', conversation: Conversation };