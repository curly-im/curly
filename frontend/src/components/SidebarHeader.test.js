import React from 'react';
import {shallow} from 'enzyme';

import SidebarHeader from './SidebarHeader';

const currentUser = { name: 'Test Test' };

test('SidebarHeader', () => {
  it('should render current user\'s name', () => {    
    const sidebarHeader = shallow(<SidebarHeader currentUser={currentUser} />);

    expect(sidebarHeader.find('span')[0].text()).toEqual(currentUser.name);
  });

  it('should render possible user actions', () => {
    const sidebarHeader = shallow(<SidebarHeader currentUser={currentUser} />);
    const expectedActionsCount = 2; // Settings and Logout

    expect(sidebarHeader.find('li').length).toEqual(expectedActionsCount);
  }) 
})