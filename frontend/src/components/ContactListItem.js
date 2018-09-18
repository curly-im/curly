import React from 'react';

import UnreadMessageIndicator from './UnreadMessagesIndicator'

export default function ContactListItem({ contact, onClick, count }) {
    console.log(count);
    console.log(contact);
    return (
        <li onClick={() => onClick(contact)}>
          {contact.name}
          <UnreadMessageIndicator count={count.get(contact.uuid)}/>
        </li>
    );
}

