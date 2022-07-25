import React, { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginPage() {
  const { loading, auth, setLoading, setAuth, setUser, user } = useContext(AuthContext);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [displayErros, setDisplayErros] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => {
    setDisplayErros('')
    console.log(e)
    const value = e.target.value;
    const name = e.target.name;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    axios.post('/auth/login', userLogin)
      .then((response) => {
        setUser(response.data)
        setAuth(true);
        setLoading(true)
        navigate("/private-acess/submit-project")
      })
      .catch((error) => {
        setDisplayErros(error.response.data)
      })
  }


  return (
    <section id="login">
      <div className="login">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="email" id="email" name="email" placeholder="Email" value={userLogin.email} onChange={handleChange} required />
          <input type="password" id="password" name="password" placeholder="Password" value={userLogin.password} onChange={handleChange} required />
          <button type="submit">  Submit </button>
        </form>
        <p className="errors-message">{displayErros}</p>
      </div>
    </section>
  );
}