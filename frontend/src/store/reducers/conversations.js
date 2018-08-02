//@flow
import type { Action } from '../actions/types';

type State = {
  current: {},
  all: []
};

function getInitialState(): State {
  return {
    current: {},
    all: []
  };
}

export default function conversations(state: State = getInitialState(), action: Action): State {
  const onAddConversation = () => {
    return {
      ...state, 
      
        all: [...state.all, action.conversation] 
    };
  };
  const onSetCurrentConversation = () => {
    return {
      ...state,
      current: action.conversation
    }
  };
  const actionToResult = new Map([
    [ 'ADD_CONVERSATION', onAddConversation ],
    [ 'SET_CURRENT_CONVERSATION', onSetCurrentConversation ]
  ]);
  const allActionTypes = [...actionToResult.keys()];

  if (!allActionTypes.includes(action.type)) return state;

  return actionToResult.get(action.type)();
}