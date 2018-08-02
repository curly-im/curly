// @flow
import React from 'react';
import { connect } from 'react-redux';

import store from './store';
import Auth from './lib/auth';
import Communication from './lib/communication';
import * as Actions from './store/actions';
import SessionLogin from './containers/SessionLogin';
import MainView from './components/MainView';

import './styles/App.css';

const mapStateToProps = state => ({
    appState: state.appState
});

function initCommunication() {
    const cookie = Auth.getCookie();
    Communication.init(store, Actions, cookie);
}

async function setAppState(appState, dispatch) {
    const authVerified = await Auth.verify();

    if (!authVerified.verified) {
        dispatch(Actions.setAppState('notLoggedIn'));
        return;
    }

    if (appState === 'loggedIn') return;

    dispatch(Actions.setAppState('loggedIn'));
    initCommunication();
}

function renderView(appState) {
    if (appState === 'notLoggedIn') return (<SessionLogin />);

    return (
        <MainView />
    );
}

export function App({ appState, dispatch }) {
    setAppState(appState, dispatch);

    return (
        <div className="App">
          {renderView(appState)}
        </div>
    );
}

export default connect(
    mapStateToProps
)(App);
