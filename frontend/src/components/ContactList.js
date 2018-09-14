import React from 'react';

import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, onContactClick }) {
    const items = contacts.map((contact, index, count) => (
        <ContactListItem contact={contact} onClick={onContactClick} key={index} count={count}/>
    ));

    return (
        <ul>
          {items}
        </ul>
    );
};
