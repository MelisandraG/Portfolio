
import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AiFillDelete } from "react-icons/ai";

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

  
  const [skills, setSkills] = useState()

  useEffect(() => {
    getSkills();
  }, []);


  const getSkills = () => {
    axios
      .get(`/auth/skills`)
      .then((response) => {
        console.log(response.data)
        setSkills(response.data)

      })
      .catch((error) => {

      });
  }
  return (
    <section id="submitProject" onSubmit={handleSubmit} className='contactContainer'>
      <form className='contact-form'>
        <input type="text" id="title" name="title" placeholder="Skill" value={newSkills.title} onChange={handleChange} required />
        <div className='input-with-button'>
          <input type="file" name="image" onChange={handleChangeImg} required />
          <button type="button" onClick={handleSubmitImage}>Add image</button>
        </div>
        <button type="submit">  Submit </button>
      </form>

      <div className="tec">
            {skills?.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="language">
                  <img alt="gallery" src={skill.image} className='skill-image' />
                  <span>
                    {skill.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
    </section>
  )
}