import React, { useContext, useState } from "react";
import { ContactContext } from "./ContactContext";
import { Link } from "react-router-dom";
import Prompt from "./Prompt";

const ContactList = () => {
  const { contacts, setContacts } = useContext(ContactContext);
  // console.log(contacts);
  const [isOpenPrompt, setOpenPrompt] = useState(false)
  const [selectedContactId, setSelectedContactId] = useState(null);
  const handleDelete = (id) => {
      setContacts((prev) => prev.filter((c) => c.id !== id));
      document.getElementById("confirmation").textContent="Deleted Successfully."
      document.getElementById("delete").classList.add("hidden")
      document.getElementById("buttons").style.justifyContent="right"
    }
  return (
    <div>
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
              <div className="flex items-center">
                <div className="truncate max-w-[150px] overflow-hidden">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div>
                  {contact.email && (
                    <img
                      src="https://img.icons8.com/?size=100&id=86206&format=png&color=000000\"
                      alt="copy"
                      onClick={(e) => {
                        navigator.clipboard.writeText(contact.email);
                        // console.log(e.target.src)
                        e.target.src =
                          "https://img.icons8.com/?size=100&id=98955&format=png&color=000000";
                        setTimeout(() => {
                          e.target.src =
                            "https://img.icons8.com/?size=100&id=86206&format=png&color=000000";
                        }, 3000);
                      }}
                      className="w-5 cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <div>{contact.number}</div>
              <div className="truncate max-w-[150px] overflow-hidden">
                <a href={contact.linkdn} target="_blank">
                  {contact.linkdn}
                </a>
              </div>
              <div>Active</div>
              <Link to={`/edit?id=${contact.id}`}>
                <div className="text-green-400 hover:text-green-700">Edit</div>
              </Link>
              <div>
                <button
                  onClick={()=>{setOpenPrompt(true)
                    setSelectedContactId(contact.id)
                  }}
                  className="text-red-400 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Prompt openPromt={isOpenPrompt} onClose={()=> setOpenPrompt(false)} onDelete={()=> handleDelete(selectedContactId)}/>
    </div>
  );
};

export default ContactList;
