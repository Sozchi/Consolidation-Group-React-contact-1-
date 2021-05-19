import React from "react";
import ContactCard from "./ContactCard";

const AddressBook = ({ contacts }) => {
  return (
    <div className="Address">
      <div className="cards">
        {contacts.map((contacts, index) => (
          <ContactCard contact={contacts} />
        ))}
      </div>
    </div>
  );
};

export default AddressBook;
