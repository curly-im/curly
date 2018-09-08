import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginView from '../components/LoginView';

import Config from '../config';

const mapStateToProps = state => {
    return { appState: state.appState };
};

export function LoginScreen({ appState, dispatch }) {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${Config.githubClientId}`;

    if (appState === 'notLoggedIn') {
        return (
            <LoginView githubAuthUrl={githubAuthUrl} />
        );
    }

    return (
        <Redirect to="/conversation" />
    );
}

export default connect(
    mapStateToProps
)(LoginScreen);
