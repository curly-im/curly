import React from 'react';

import UnreadMessageIndicator from './UnreadMessagesIndicator'

export default function ContactListItem({ contact, onClick, count }) {
    return (
        <li onClick={() => onClick(contact)}>
          {contact.name}
          <UnreadMessageIndicator count={count.get(contact.uuid)}/>
        </li>
    );
}

