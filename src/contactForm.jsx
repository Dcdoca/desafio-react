import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, editContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setPhone(editContact.phone);
      setEmail(editContact.email);
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      const contact = { name, phone, email };
      addContact(contact);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{editContact ? 'Atualizar' : 'Adicionar'} Contato</button>
    </form>
  );
};

export default ContactForm;
