import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import store from './store';
import Auth from './lib/auth';
import Communication from './lib/communication';
import * as Actions from './store/actions';
import MainView from './components/MainView';
import SessionLogin from './containers/SessionLogin';

import './styles/App.css';

const mapStateToProps = state => ({
    appState: state.appState
});

let communicationInitialized = false;

function initCommunication() {
    const cookie = Auth.getCookie();
    Communication.init(store, Actions, cookie);
}

async function setAppState(appState, dispatch) {

    if (appState === 'loggedIn') {
        return;
    }

    const authVerified = await Auth.verify();

    if (!authVerified.verified) {
        dispatch(Actions.setAppState('notLoggedIn'));
        return;
    }

    dispatch(Actions.setAppState('loggedIn'));
}

export function App({ appState, dispatch }) {
    setAppState(appState, dispatch);

    if (appState === 'loggedIn' && !communicationInitialized) {
        communicationInitialized = true;
        initCommunication();
    }

    return (
        <div className="App">
            <Route path="/login" component={SessionLogin} />
            <PrivateRoute appState={appState} exact path="/" component={MainView} />
        </div>
    );
}

export default withRouter(connect(
    mapStateToProps
)(App));
