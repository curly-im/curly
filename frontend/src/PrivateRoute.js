import React from 'react';
import { Redirect, Route } from 'react-router';

export default function PrivateRoute({ component: Component, appState, ...rest }) {
    const loginRedirectConf = props => {
        return {
            pathname: '/login',
            state: { from: props.location }
        };
    };

    const render = props => (
        appState === 'loggedIn'
            ? <Component {...props} />
            : <Redirect to={loginRedirectConf(props)} />
    );

    return (
        <Route {...rest} render={render} />
    );
}
