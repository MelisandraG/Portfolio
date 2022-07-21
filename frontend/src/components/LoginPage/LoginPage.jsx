import React, {useState} from "react";
import axios from 'axios';


export default function LoginPage() {
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
        console.log(e)
        const value =e.target.value;
        const name = e.target.name;
        setUserLogin({ ...userLogin, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        axios.post('/auth/login', userLogin)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}
    

  return (
    <section id="about">
      <div >
      <form className="contact-form" onSubmit={handleSubmit}>
            <input type="email"id="email" name="email" placeholder="Email" value={userLogin.email} onChange={handleChange} required/>
            <input type="password" id="password" name="password" placeholder="Password" value={userLogin.password} onChange={handleChange} required/>
          <button type="submit">  Submit </button>
        </form>

      </div>
    </section>
  );
}