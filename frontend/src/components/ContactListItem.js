import React from 'react';

export default function ContactListItem({ contact, onClick }) {
    return (
        <li onClick={() => onClick(contact)}>
          {contact.name}
        </li>
    );
}
