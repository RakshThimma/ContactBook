import React from 'react'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
    <div className='flex justify-between items-center  pl-4 pr-10 py-2 shadow-md'>
        <h1 className='text-2xl font-bold'>Contact Form</h1>
        <nav>
            <ul className='flex items-center gap-12 m-2'>
                <Link to="/"><li className='cursor-pointer'>Home</li></Link>
                <Link to="/list"><li className='cursor-pointer'>Contacts</li></Link>
            </ul>
        </nav>
    </div>
    {/* <ContactForm /> */}
    </div>
  )
}

export default Header