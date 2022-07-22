// src/components/Contact.js

import React, {useState} from "react";
import { MailIcon } from "@heroicons/react/solid";
import emailjs from "emailjs-com";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message:"",

  });

  
  let handleChange = (e) => {

    console.log(e)
    const value =e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  


  };

function sendEmail(e){
  e.preventDefault()
  
  
  emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
  .then(response =>console.log(response))
  .catch(err =>console.log(err))
}
  return (
    <section id="contact" className="relative">
      <div className="section-title">
          <div className="section-title-icon"><MailIcon/></div>
          <h2>Contact me</h2>
      </div>
      <div className="contactContainer">
        <p>
        Feel free to send me a message, I would like to receive feedback on my work
        </p>
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" id="name" name="name" placeholder="Name" value={form.name} onChange={handleChange} required/>
            <input type="email"id="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required/>
            <input type="subject"id="subject"name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required/>
            <textarea  id="message"name="message" value={form.message} onChange={handleChange} placeholder="Write a message" required/>
          <button type="submit">  Submit </button>
        </form>
      </div>
    </section>
  );
}