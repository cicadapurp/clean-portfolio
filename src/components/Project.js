import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import gitHub from '../images/github.png'
import mouse from '../images/mouse.png'
import { withContext, } from '../providers/ThemeProvider'
import ProjectStory from './ProjectStory';


const Project = (props) => {
  const {type, name, images,  description, repo, url, contribution} = props.proj


  






  return (
    <ProjectStyles>
      <div>
        
        <h4>{name}</h4>
            <div className="div">

        <ProjectStory 
          proj={props.proj}
          />
          
           
          </div>
          
      </div>
    </ProjectStyles>
  );
};



const ProjectStyles = styled.div`


text-align: center;





  box-shadow: 3px 0 27px -25px rgba(0,0,0,0.75);
  transition: 0.5s;
:hover {
box-shadow: -1px 6px 21px -15px rgba(0,0,0,0.75);
}

div {
padding: 5pt;
width: 95%;
height: fit-content;
transition: 0.5s;
}



`;
export default Project;