import React from 'react';

import UserSidebarHeader from '../containers/UserSidebarHeader';
import UserContactList from '../containers/UserContactList';

export function Sidebar() {
  return (
    <div>
      <UserSidebarHeader />
      <UserContactList />
    </div>
  );
}

export default Sidebar;