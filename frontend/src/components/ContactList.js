import React from 'react';

import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, onContactClick, count }) {
    console.log(count);
    const items = contacts.map((contact, index) => (
        <ContactListItem contact={contact} onClick={onContactClick} key={index} count={count}/>
    ));
    return (
        <ul>
          {items}
        </ul>
    );
};
