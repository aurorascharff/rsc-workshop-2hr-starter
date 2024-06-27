import React from 'react';
import ContactButton from './ContactButton';
import type { Contact } from '@prisma/client';

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {contacts.length ? (
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
