import React, {useState} from 'react';
import { Link, } from 'react-router-dom'
import linkedIn from '../images/linkedIn.png'
import gitHub from '../images/github.png'
import resume from '../images/resume.jpg'
// import resumePDF from '../images/Resume.pdf'
import phone from '../images/phone.png'
import styled from 'styled-components'

// make the project name display in the corner 
//make a drop down menu listing my projects

const Nav = (props) => {
  const [toggle, setToggle] = useState(true)

  const toggler = () => {
    setToggle(!toggle)
  }
  console.log(toggle)

  return (
    <NavStyle className={window.innerWidth < 1000 ? 'footer' : null} >
      <a target="_blank" href='https://github.com/TallanGroberg'>
      <img src={gitHub} width='40' />MyGitHub
      </a>
      <a target="_blank" href='https://www.linkedin.com/in/tallan-groberg'>
        <img src={linkedIn} width="40" />
      LinkedIn</a>
   
      <a target="_blank" href='https://docs.google.com/document/d/1PUQgY_Dp_m6HYXkwOiOgQGuT-iK4eSzQ68vY1P0zGPQ/edit?usp=sharing'  download>
        <img src={resume} width="40" />
      MyResume</a>
      {toggle ? 

        <Link onClick={toggler} to='/contact'> <img src={phone} alt="" width="40"/>Contact</Link>
        : 
        <Link onClick={toggler} to='/'> <img src={phone} alt="" width="40"/>Projects</Link>
      }
    </NavStyle>
  );
};

const NavStyle = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1pt;
  text-align: center;
  transition: 0.5s;
  box-shadow: -1px 6px 21px -15px rgba(0,0,0,0.75);
  z-index: 1;
  position: sticky;
  bottom: 0;
  box-shadow: -1px -6px 21px -15px rgba(0,0,0,0.75);
  
  a:hover {
  box-shadow: -12px 139px 108px -135px rgba(0,0,0,0.75);
    filter: invert(2%);
    color: #2e2f30;
}
img:hover {
  box-shadow: -12px 139px 108px -135px rgba(0,0,0,0.75);
}

`;

export default Nav;