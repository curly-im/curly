import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import { createStore } from 'redux'

import rootReducer from './store/reducers';
const store = createStore(rootReducer);

it('renders without crashing', () => {
  const fakeDispatch = () => {};
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App dispatch={fakeDispatch} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
