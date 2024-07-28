import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

import "../styles/App.css";

function Contacts({ onContactAdded, contactList, onContactRemoved }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddContact = () => {
    if (name && email) {
      onContactAdded({ name, email });
      setName("");
      setEmail("");
    }
  };

  const handleRemoveContact = (emailToRemove) => {
    onContactRemoved(emailToRemove);
  };

  return (
    <div className="box">
      <h2>Add Contacts</h2>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button onClick={handleAddContact} disabled={!name || !email}>
        Add Contact
      </Button>
      <br />
      <ul>
        {contactList.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
            <Button
              onClick={() => handleRemoveContact(contact.email)}
              className="remove-button"
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
