import React, { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { Link } from "react-router-dom";

const ContactList = () => {
  const { contacts, setContacts } = useContext(ContactContext);
  console.log(contacts);
  const handleDelete = (id)=> {
       setContacts((prev) => prev.filter((c)=> c.id !== id ))

  }
  return (
    <div>
      <div className="shadow-md grid grid-cols-9 text-center bg-gray-300 p-4">
        <div>Contact ID</div>
        <div>First Name</div>
        <div>Last Name </div>
        <div>Email ID</div>
        <div>Phone Number</div>
        <div>Linkdn ID</div>
        <div>Status</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      {contacts.map((contact, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-9 text-center items-center p-4 "
          >
            <div>{contact.id}</div>
            <div className="text-center">{contact.fname}</div>
            <div className="text-center">{contact.lname}</div>
            <div className="truncate max-w-[150px] overflow-hidden">
              {contact.email}
            </div>
            <div>{contact.number}</div>
            <div className="truncate max-w-[150px] overflow-hidden">
              {contact.linkdn}
            </div>
            <div>Active</div>
            <Link to={`/edit?id=${contact.id}`}><div className="text-green-400 hover:text-green-700">Edit</div></Link>
            <div>
              <button onClick={()=>handleDelete(contact.id)} className="text-red-400 hover:text-red-700">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
