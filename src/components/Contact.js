import React, {useState,} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import styled from 'styled-components'

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
      email: "",
        subject: '',
          text: '',})

        const handleSubmit = e => {
          e.preventDefault()
            Axios.post('/feedback', {
              subject: inputs.subject,
              name: inputs.name,
              email: inputs.email,
              text: inputs.text,
            })
            .then(res => {
              console.log(res)
            })
        }
        const handleChange = e => {
          const {name, value} = e.target;
          setInputs(prev => ({...prev, [name]: value}))
        }
  return (
    <div>
      <Link to='/'>Prev</Link>
      <h1>Tallan Groberg</h1>
      <h3>Email: tallan.taven@gmail.com</h3>
      <h4>Phone: 757-620-7310</h4>
        <form onSubmit={handleSubmit}>
          <p>name</p>
          <input 
            placeholder="name"
            name="name"  
            value={inputs.name} 
            onChange={handleChange} 
            />
          <p>email</p>
          <input 
            placeholder="your email" 
            name="email"
            value={inputs.email} 
            onChange={handleChange} 
            />
            <p>subject</p>
          <input 
            placeholder="subject" 
            name="subject"
            value={inputs.subject} 
            onChange={handleChange} 
            />
            <p>body</p>
          <textarea placeholder="enter a message and I will get back to you." value={inputs.text} onChange={handleChange} 
          name="text" id="" cols="20" rows="5"></textarea>
          <ButtonStyle>submit</ButtonStyle>
          </form>

    </div>
  );
};


const ButtonStyle = styled.button`
 
	box-shadow:inset -2px -9px 0px -4px #ffffff;
	background-color:#ffffff;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:2px 21px;
	text-decoration:none;
	text-shadow:0px 2px 0px #ffffff;

:hover {
	background-color:#f6f6f6;
}
:active {
	position:relative;
	top:1px;
}
`;

export default Contact;