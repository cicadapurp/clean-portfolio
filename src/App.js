import React, { useState, useEffect, } from 'react';
import styled from 'styled-components'
import { Route, Switch, } from 'react-router-dom'
import { withContext, } from './providers/ThemeProvider'
import Home from './components/Home'
import Nav from './components/Nav'
import background from './images/background.jpg'
// change the font sizes to enstill a visual hierarchy, and make the shadows more uniform on the cards use an nth-child selector to slightly change the look of the cards. 

const App = (props) => {
  const [width, setWidth] = useState(0)
  useEffect( () => {
    setWidth(window.innerWidth)
  }, [])
  console.log('width', width)

  return ( 
  <Container>
    {width > 1000 ? <Nav /> : null}
    <Switch>
      <Route exact path='/' render={ rProps => <Home {...rProps} />} />
    </Switch>
    {width < 1000 ? <Nav type="footer" /> : null}
  </Container>
  );
};

const Container = withContext(styled.div`
  font-family: Muli;
  font-weight: bold;
  background: #FFFFFF;

  a {
  text-decoration: none;
  color: #7c7e7f;
  transition: 0.5s;

}
a:hover {
  box-shadow: 3px 0 27px -25px rgba(0,0,0,0.75);
  color: #2e2f30;
}

img {
  transition: 0.5s;
}
img:hover {
  
}
`);

export default withContext(App);