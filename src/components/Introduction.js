import React from 'react';
import styled from 'styled-components'

const Introduction = () => {
  return (
    <IntroStyle>
      <div>
        <h3>Hello</h3>
        <br /> 
          My name is Tallan Groberg. I am a full stack web developer. I have a passion for solving problems and building software. Writing, and helping people.
          <br />
          let me show you some of the things I've done
      </div>
    </IntroStyle>
  );
};


const IntroStyle = styled.div`

div {
  margin: auto;
  margin-bottom: 5pt;
  left: 0;
  right: 0;
  width: 95%;
  text-align: center;
  
}
`;
export default Introduction;