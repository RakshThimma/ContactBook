import { createContext, useEffect, useState } from "react";

export const ContactContext = createContext()

const ContactProvider = ({ children }) => {
  const [contacts, setContacts ] = useState(()=>{
    const saved = localStorage.getItem("contacts")
    return saved ? JSON.parse(saved) : []
  });
  
  useEffect(()=> {
    
    localStorage.setItem("contacts", JSON.stringify(contacts))
  },[contacts])
  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};
export default ContactProvider
