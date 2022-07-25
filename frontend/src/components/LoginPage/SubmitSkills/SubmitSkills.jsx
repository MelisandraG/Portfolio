
import React, { useState, useContext } from "react";
import axios from 'axios';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function SubmitSkills() {

  const [newSkills, setNewSkills] = useState({
    title: "",
    image: "",
  });

  const [SkillsImage, setSkillsImage] = useState(null);
  const [skillsUrl, setSkillsUrl] = useState(null);

  let handleChange = (e) => {

    const value = e.target.value;
    const name = e.target.name;
    setNewSkills({ ...newSkills, [name]: value });
  };

  function handleChangeImg(e) {
    if (e.target.files[0]) {
      setSkillsImage(e.target.files[0])
    }
  }

  function handleSubmitImage(e) {

    const imageRef = ref(storage, `skills/${SkillsImage.name}`)
    console.log(imageRef)
    uploadBytes(imageRef, SkillsImage)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(url)
            setSkillsUrl(url);
            setNewSkills({ ...newSkills, image: url });
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setSkillsImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });

  }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newSkills)

    axios.post('/auth/newSkills', newSkills)
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
        <input type="text" id="title" name="title" placeholder="Skill" value={newSkills.title} onChange={handleChange} required />
        <input type="file" name="image" onChange={handleChangeImg} required />
        <button type="button" onClick={handleSubmitImage}>Add image</button>
        <button type="submit">  Submit </button>
      </form>
    </section>
  )
}