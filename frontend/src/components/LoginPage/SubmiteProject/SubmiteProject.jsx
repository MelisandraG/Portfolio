
import React,{useState, useContext} from "react";
import axios from 'axios';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SubmitProject() {

  const [newProject, setNewProject] = useState({
    title: "",
    subtitle: "",
    description: "",
    technologies:"",
    image:"",
    link:"",
  });

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  let handleChange = (e) => {

    const value =e.target.value;
    const name = e.target.name;
    setNewProject({ ...newProject, [name]: value });
  };

    function handleChangeImg(e) {
      if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
    }

    function handleSubmitImage(e) {
      console.log(image)
      const imageRef = ref(storage, `image/${image.name}`)
      uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            setNewProject({ ...newProject, image: url });
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  
      }


      console.log(url)

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
        <button onClick={handleSubmitImage}>Add image</button>
        <input type="text"id="link" name="link" placeholder="Project link" value={newProject.link} onChange={handleChange} required/>
        <button type="submit">  Submit </button>
        </form>
    </section>
)}