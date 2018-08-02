import React from 'react';

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
          <li>Logout</li>
        </ul>
      </nav>
    </header>
  );
}