import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './contactList';
import './App.css';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) setContacts(storedContacts);
  }, []);


  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    if (editContact) {
      setContacts(
        contacts.map((c) => (c.id === editContact.id ? contact : c))
      );
      setEditContact(null);
    } else {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
  };

  const editExistingContact = (contact) => {
    setEditContact(contact);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>Gerenciador de Contatos</h1>
      <ContactForm addContact={addContact} editContact={editContact} />
      <ContactList
        contacts={contacts}
        editContact={editExistingContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
