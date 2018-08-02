import React from 'react';
import { connect } from 'react-redux';

import LoginView from '../components/LoginView';

import Config from '../config';

export function LoginScreen({ dispatch }) {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${Config.githubClientId}`;

  return (
    <LoginView githubAuthUrl={githubAuthUrl} />
  );
}

export default connect()(LoginScreen);
