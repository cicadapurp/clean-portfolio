import React from 'react';
import styled from 'styled-components'
import gitHub from '../images/github.png'
import mouse from '../images/mouse.png'
import { withContext, } from '../providers/ThemeProvider'


const Project = (props) => {

  console.log('in projects: props = ', props)
  const {type, name, description, repo, url, contribution} = props.proj

  return (
    <ProjectStyles>
      <div>
        <h3><em>{type}</em></h3>
        <h4>{name}</h4>
          <p>{description}</p>
            <a target="_blank" href={repo}> gitHub<img src={gitHub} width='40' /></a>
             
            <a target="_blank" href={url}><img src={mouse} width="40" />See the site</a><p><em>Note:</em> it may take a second for server to load.</p>
          <p><em>My contributions:</em> {contribution}</p>
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