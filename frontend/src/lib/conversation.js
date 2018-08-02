// @flow

export type Conversation = {
  id: string,
  state: 'open' | 'closed',
  contact: {
    name: string
  }
};