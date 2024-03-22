"use client"
import { useState } from 'react';

const PopupForm = ({nameOfButton}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    console.log('button clicked');
    
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} className="bg-black text-white font-medium rounded-md p-2 mt-4 ml-3 transition-colors duration-300 hover:bg-yellow-300 hover:text-black">
        {nameOfButton}
      </button>
      {isOpen &&(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-black">
            <h2 className="text-2xl font-bold mb-4">{nameOfButton}</h2>
            <form>
              <label htmlFor="fullName" className="block mb-2">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <label htmlFor="phone" className="block mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <label htmlFor="city" className="block mb-2">City</label>
              <input type="tel" id="city" name="city" className="w-full p-2 border border-gray-300 rounded mb-4" />

              <button type="submit" className="bg-black hover:bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;