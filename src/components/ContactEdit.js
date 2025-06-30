import React, { useContext } from 'react'
import ContactForm from './ContactForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { ContactContext } from './ContactContext'

const ContactEdit = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const id= searchParams.get("id");
    const {contacts, setContacts} = useContext(ContactContext)
    
    const contactToEdit = contacts.find((c) => c.id === Number(id))

    const handleSubmit = (updatedData) => {
        const updatedContacts = contacts.map((c) => 
             c.id === Number(id) ? {...c,...updatedData} : c
        )
        setContacts(updatedContacts)
         navigate("list")
    }
    if (!contactToEdit) return <div>Loading...</div>;

  return (
    <div>
       <ContactForm initialData = {contactToEdit} onSubmit={handleSubmit}/>
    </div>
  )
}

export default ContactEdit