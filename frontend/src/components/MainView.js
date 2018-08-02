import React from 'react';

import Sidebar from './Sidebar';
import '../styles/MainView.css';
import CurrentConversationView from '../containers/CurrentConversationView';

export function MainView() {
    return (
        <div className="view">
          <div className="view-column-left sidebar-container">
            <Sidebar />
          </div>
          <div className="view-column-right conversation-view-container">
            <CurrentConversationView />
          </div>
        </div>
    );
}

export default MainView;
