import React from 'react';

import UnreadMessageIndicator from './UnreadMessagesIndicator'

export default function ContactListItem({ contact, onClick }) {
    return (
        <li onClick={() => onClick(contact)}>
          {contact.name}
          <UnreadMessageIndicator count={1}/>
        </li>
    );
}
