import React from 'react';
import styled from 'styled-components'
import Introduction from './Introduction'
import Project from './Project'
import { withContext, } from '../providers/ThemeProvider'


//make with minimal borders and light shadows.
// single page app with a menu to point to specific projects when clicked from the menu

const Home = (props) => {

  const {projectObj, } = props
  return (<>
    <Introduction />

      <HomeStyle>
      {projectObj.map(proj => <Project proj={proj} />)}
    </HomeStyle>
    
    </>
  );
};

const HomeStyle = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(200pt, 1fr));
grid-gap: 5pt;
margin-bottom: 10pt;
 
div:nth-child(2n+0) {
  background: rgb(250,250,250);
background: linear-gradient(180deg, rgba(250,250,250,1) 1%, rgba(255,255,255,1) 12%);
}
`;

export default withContext(Home);