import React from 'react';

const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <span>{contact.name} - {contact.phone} - {contact.email}</span>
            <button onClick={() => editContact(contact)}>Editar</button>
            <button onClick={() => deleteContact(contact.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
