
import React,{useState, useContext} from "react";
import axios from 'axios';

export default function SubmitProject() {

  const [newProject, setNewProject] = useState({
    title: "",
    subtitle: "",
    description: "",
    technologies:"",
    image:"",
    link:"",
  });


  let handleChange = (e) => {

    console.log(e)
    const value =e.target.value;
    const name = e.target.name;
    setNewProject({ ...newProject, [name]: value });
  };

    function handleChangeImg(e) {
        console.log(URL.createObjectURL(e.target.files[0]));
        const urlLink=URL.createObjectURL(e.target.files[0])
        setNewProject({ ...newProject, image: urlLink });
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        axios.post('/auth/newProject', newProject)
        .then((response) => {
            console.log(response)
            alert("Your file is being uploaded!")

        })
        .catch((error) => {
            console.log(error)
        
        })
}

    return (
    <section id="submitProject" onSubmit={handleSubmit} className='contactContainer'>
        <form className='contact-form'>
        <input type="text"id="title" name="title" placeholder="Project title" value={newProject.title} onChange={handleChange} required/>
        <input type="text"id="subtitle" name="subtitle" placeholder="Project subtitle" value={newProject.subtitle} onChange={handleChange} required/>
        <textarea  id="description" name="description" value={newProject.description} onChange={handleChange} placeholder="Write a description" required/>
        <input type="text"id="technologies" name="technologies" placeholder="technologies" value={newProject.technologies} onChange={handleChange} required/>
        <input type="file" name="image"  onChange={handleChangeImg}/>
        <input type="text"id="link" name="link" placeholder="Project link" value={newProject.link} onChange={handleChange} required/>
        <button type="submit">  Submit </button>
        </form>
    </section>
)}