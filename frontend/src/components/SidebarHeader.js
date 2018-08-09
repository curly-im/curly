import React from 'react';
import LinkButton from './LinkButton';
import { logout } from '../lib/auth';

import '../styles/SidebarHeader.css';

export default function SidebarHeader({ currentUser }) {
    const userName = currentUser.name || 'Unknown Guest';
    return (
        <header className="sidebar-header">
            <span className="current-user-name">
                {userName}
            </span>
            <nav className="user-actions">
                <ul>
                  <li>Settings</li>
                  <LinkButton label="test"/>
                  <LinkButton onClick={logout} label="logout" />
                  <li>LinkButton</li>
                </ul>
            </nav>
        </header>
    );
}