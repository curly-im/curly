import React from 'react';

import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, onContactClick }) {
    const items = contacts.map((contact, index) => (
        <ContactListItem contact={contact} onClick={onContactClick} key={index} />
    ));

    return (
        <ul>
          {items}
        </ul>
    );
};
