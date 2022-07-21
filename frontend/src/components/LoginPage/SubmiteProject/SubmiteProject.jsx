// title: "React Reserve",
// subtitle: "MERN Stack",
// description:
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
// image: "./machefai.png",
// link: "https://portfolio-737fc.web.app/",
import React,{useState, useEffect} from "react";
import axios from 'axios';


export default function SubmitProject() {

    
  const [newProject, setNewProject] = useState({
    title: "",
    subtitle: "",
    description: "",
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

    console.log(newProject)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
        axios.post('/auth/newProject', newProject)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

    return (
        <section id="submitProject" onSubmit={handleSubmit}>

            <form >
            <input type="text"id="title" name="title" placeholder="Project title" value={newProject.title} onChange={handleChange} required/>
            <input type="text"id="subtitle" name="subtitle" placeholder="Project subtitle" value={newProject.subtitle} onChange={handleChange} required/>
            <textarea  id="description" name="description" value={newProject.description} onChange={handleChange} placeholder="Write a description" required/>
            <input type="file" name="image"  onChange={handleChangeImg}/>
            <input type="text"id="link" name="link" placeholder="Project link" value={newProject.link} onChange={handleChange} required/>
            <button type="submit">  Submit </button>
            </form>
</section>)}