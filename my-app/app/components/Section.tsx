"use client"
import Image from "next/image"
import emailjs from '@emailjs/browser';
//import PopupForm from "./Popup"
import { useState } from "react";
export default function Section(){
    return <div className="bg-cover" style={{
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(209, 213, 219, 0.7)), url(https://media.istockphoto.com/id/1680285819/photo/teamwork-with-business-people-analysis-cost-graph-on-the-desk-in-the-meeting-room-the.webp?b=1&s=170667a&w=0&k=20&c=BiJUxDzoCwOKiYiSqY4BqwB_jfV_4Z1Mf_6eBzbKdFg=)',
  }}>
      <section className="sm:grid sm:grid-cols-3 bg-cover bg-center">
          <article className="p-4 items-start text-left">
              <h1 className="text-4xl font-bold text-black">Financial Success is not about Perfection, It is about Direction</h1>
              <p className="mt-6 text-gray-800">PSS Financial is a growing financial services provider in India, offering a diverse range of financial services such as mutual funds, insurance, equities, bonds, PMS-AIF, and fixed income products.</p>
              <div className="mt-5 text-gray-900">
                        <div className="flex flex-row p-2">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eQnawv3GZZYSdn_7RY8dHSIz-ULA9dGQ3A&usqp=CAU"
                                alt="Check mark icon"
                                width={16}
                                height={16}
                                className="h-4 w-4 mr-2 mt-1"
                            />
                            <p>Get Personalised Investment plans.</p>
                        </div>
                        <div className="flex flex-row  p-2">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eQnawv3GZZYSdn_7RY8dHSIz-ULA9dGQ3A&usqp=CAU"
                                alt="Check mark icon"
                                width={16}
                                height={16}
                                className="h-4 w-4 mr-2 mt-1"
                            />
                            <p>Achieve your Financial Goal faster.</p>
                        </div>
                        <div className="flex flex-row  p-2">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2eQnawv3GZZYSdn_7RY8dHSIz-ULA9dGQ3A&usqp=CAU"
                                alt="Check mark icon"
                                width={16}
                                height={16}
                                className="h-4 w-4 mr-2 mt-1"
                            />
                            <p>Become Financially independent.</p>
                        </div>
                        <br/>
                    </div>
                </article>
                <div></div>
                <div className="shadow-2xl sm:ml-28 w-full h-auto overflow-hidden rounded-md">
                    <img src="https://media.istockphoto.com/id/1503371245/photo/percentage-sign-on-top-of-coin-stacks-before-blue-financial-graph.webp?b=1&s=170667a&w=0&k=20&c=iMNT5BdW-v-hi1sy9MpkxdFllh3Ab2Qq_NQhZ3ZQdzc=" className="mt-6 transition duration-300 ease-in-out hover:scale-110 w-full h-full mr-10 object-cover object-center rounded-md" alt="PSS Financial Images" />
                </div>
                <div className="sm:flex flex-col justify-center mt-4 ml-10 sm:-mt-2">
                    <p className="mr-3 mb-2">⭐⭐⭐⭐⭐</p>
                    <p className="text-black font-serif font-semibold text-xl">75,000+ customer reviews</p>
                </div>
            </section>
            <div className="flex justify-center h-full">
                <PopupFormSection nameOfButton="Book a Call" />
            </div>
        </div>
}



const PopupFormSection = ({nameOfButton}: any) => {
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
        ).then(
          ()=>{
            setLoading(false);
            alert("Thank you , we will contact you soon");
  
            setForm({
              fullName:"",
              city:"",
              phone:"",
              email:""
            });
          },
          (error)=>{
            setLoading(false);
            console.log(error);
            alert("Something went wrong please try again later");
          }
        )
    }

    const closePopup = (e:any) => {
      if (e.target.classList.contains('bg-gray-800')) {
        setIsOpen(false);
      }
    };

    const togglePopup = () => {
      console.log('button clicked');
      
      setIsOpen(!isOpen);
    };
  
    return (
      <div onClick={closePopup}>
        <button onClick={togglePopup} className="bg-black text-white font-medium rounded-md sm:p-4 p-2 mt-4 ml-3 transition-colors duration-300 hover:bg-yellow-300 hover:text-black mb-6">
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
                <input value={form.email} onChange={handleChange}  type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded mb-4" />
  
                <label htmlFor="phone" className="block mb-2">Phone Number</label>
                <input  value={form.phone} onChange={handleChange} type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded mb-4" />
  
                <label htmlFor="city" className="block mb-2">City</label>
                <input value={form.city} onChange={handleChange}  type="text" id="city" name="city" className="w-full p-2 border border-gray-300 rounded mb-4" />
  
                <button type="submit" className="bg-black hover:bg-yellow-500 hover:text-black text-white font-bold py-2 px-4 rounded">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };
  


{/* <div className=" border-4 border-black">
            <Image
                className="h-full w-full p-2 object-cover object-center transform transition-all duration-500 hover:border-collapse"
                src=""
                alt="Percentage sign on top of coin stacks before blue financial graph"
                layout="fill"
            />
        </div> */}