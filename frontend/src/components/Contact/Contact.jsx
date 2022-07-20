// src/components/Contact.js

import React, {useState} from "react";
import { MailIcon } from "@heroicons/react/solid";

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


  return (
    <section id="contact" className="relative">
      <div className="section-title">
          <div className="section-title-icon"><MailIcon/></div>
          <h2> Hire Me</h2>
      </div>
      <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
      </p>
        <form className="contact-form">
            <input type="text" id="name" name="name" placeholder="Name" value={form.name} onChange={handleChange}/>

            <input type="email"id="email"name="email" placeholder="Email" value={form.email} onChange={handleChange}/>

            <input type="subject"id="subject"name="subject" placeholder="Subject" value={form.subject} onChange={handleChange}/>

            <textarea  id="message"name="message" value={form.message} onChange={handleChange} placeholder="Write a message"/>
          <button type="submit">  Submit </button>
        </form>
    </section>
  );
}