// src/components/Contact.js

import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
        <form netlify name="contact">
          <h2> Hire Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div>
            <label htmlFor="name"> Name </label>
            <input type="text" id="name" name="name"/>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email">Email</label>
            <input type="email"id="email"name="email" />
          </div>
          <div className="relative mb-4">
            <label  htmlFor="message">  Message</label> 
            <textarea  id="message"name="message" />
          </div>
          <button type="submit">  Submit </button>
        </form>
    </section>
  );
}