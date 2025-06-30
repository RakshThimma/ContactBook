import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "./ContactContext";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ initialData = {}, onSubmit }) => {
  const navigate = useNavigate()
  const { contacts, setContacts } = useContext(ContactContext);

  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    linkdn: "",
    
  });
  const [error, setError] = useState("");
  // useEffect(() => {
  //   console.log("contacts updated:", contacts);
  // }, [contacts]);

  useEffect(() => {
  if (initialData && Object.keys(initialData).length > 0) {
    setFormdata({
      fname: initialData.fname || "",
      lname: initialData.lname || "",
      email: initialData.email || "",
      number: initialData.number || "",
      linkdn: initialData.linkdn || "",
    });
  }
}, [initialData]);

  const handleChange = (e) => {
    // setFormdata({...formdata, [e.target.name] : e.target.value})
    setFormdata((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.fname.trim() === "") {
      setError("Please Enter the First Name");
      return;
    }
    setError("");

    if (onSubmit) {
      //edit
      onSubmit(formdata);
    } else {
      //update
      const updatedID_formdata = { ...formdata, id: contacts.length + 100 };
      setContacts([...contacts, updatedID_formdata]);
      setFormdata({ fname: "", lname: "", email: "", number: "", linkdn: "" });
    }

    navigate("list")
  };
  return (
    <div>
      <h1 className="text-xl text-red-500 m-2">
        Please Enter your Details below
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <table className="mx-4 my-2 border-separate border-spacing-y-4">
          <tbody>
            <tr>
              <th className="text-left">First Name :</th>
              <td>
                <input
                  id="fname"
                  type="text"
                  name="fname"
                  value={formdata.fname}
                  onChange={(e) => handleChange(e)}
                  className="border-gray-400 border-2 py-1 w-60 outline-none px-1"
                />
                {error && (
                  <p className="text-xs text-red-500 absolute top-[153px] ">
                    {error}
                  </p>
                )}
              </td>
            </tr>

            <tr>
              <th className="text-left">Last Name :</th>
              <td>
                <input
                  type="text"
                  name="lname"
                  value={formdata.lname}
                  onChange={(e) => handleChange(e)}
                  className="border-gray-400 border-2 w-60 py-1 outline-none px-1"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left">
                <label htmlFor="">Email Address :</label>
              </th>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={(e) => handleChange(e)}
                  className="border-gray-400 border-2 w-60 py-1 outline-none px-1"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left">Phone Number :</th>
              <td>
                <input
                  type="number"
                  name="number"
                  value={formdata.number}
                  onChange={(e) => handleChange(e)}
                  className="border-gray-400 border-2 w-60 py-1 outline-none px-1"
                />
              </td>
            </tr>
            <tr>
              <th className="text-left">Linkdn :</th>
              <td>
                <input
                  type="url"
                  name="linkdn"
                  value={formdata.linkdn}
                  onChange={(e) => handleChange(e)}
                  className="border-gray-400 border-2 w-60 py-1 outline-none px-1"
                />
              </td>
            </tr>
            <tr>
              <th></th>
              <td className="py-4">
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-green-500 shadow-sm border-gray-500 border-2 hover:bg-green-600 text-white font-medium px-4 py-1  "
                  >
                    {onSubmit? "Update" : "Submit"}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default ContactForm;
