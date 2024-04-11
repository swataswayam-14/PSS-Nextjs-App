"use client"
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { error } from 'console';


const PopupForm = ({nameOfButton}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form , setForm] = useState({
    city:"",
    fullName:"",
    email:"",
    phone:""
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e:any) => {
    const { name, value } = e.target;
  
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e:any)=>{
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_f5kfd34', 'template_f3htyih',
        {
          fullName: form.fullName,
          email:form.email,
          city:form.city,
          phone:form.phone
        },
        'oi_vgB4Qy0XH8KjSy'
      ).then((response) => {
        setLoading(false);
        alert("Thank you, we will contact you soon");

        setForm({
          fullName: "",
          city: "",
          phone: "",
          email: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong, please try again later");
      });
  }

  const togglePopup = () => {
    console.log('button clicked');
    
    setIsOpen(!isOpen);
  };
  const closePopup = (e:any) => {
    if (e.target.classList.contains('bg-gray-800')) {
      setIsOpen(false);
    }
  };
  
 
  return (
    <div onClick={closePopup}>
      <button onClick={togglePopup} className="bg-black text-white font-medium rounded-md p-2 mt-4 ml-3 transition-colors duration-300 hover:bg-yellow-300 hover:text-black">
        {nameOfButton}
      </button>
      {isOpen &&(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-black">
            <h2 className="text-2xl font-bold mb-4">{nameOfButton}</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName" className="block mb-2">Full Name</label>
              <input value={form.fullName} onChange={handleChange} type="text" id="fullName" name="fullName" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <label htmlFor="email" className="block mb-2">Email</label>
              <input value={form.email} onChange={handleChange} type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <input value={form.phone} onChange={handleChange} type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <label htmlFor="city" className="block mb-2">City</label>
              <input value={form.city} onChange={handleChange} type="text" id="city" name="city" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <button type="submit" className="bg-black hover:bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;