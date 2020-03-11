import React, { useState, useEffect, } from 'react';
import styled from 'styled-components'
import { Route, Switch, } from 'react-router-dom'
import { withContext, } from './providers/ThemeProvider'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contact'
import background from './images/background.jpg'
// change the font sizes to enstill a visual hierarchy, and make the shadows more uniform on the cards use an nth-child selector to slightly change the look of the cards. 

const App = (props) => {
  const [width, setWidth] = useState(0)
  useEffect( () => {
    setTimeout(setWidth(window.innerWidth),50)
  }, [])

  console.log(`

         /|  I 
       /__| )  used 
     /____| ))  to be
   /______| )))   a sailor
 /________|  ))) 
         _|____))        
|========| o o /          
~~~~~~~~~~~~~~~~~~~ 

              |    |    |          
             )_)  )_)  )_)              
            )___))___))___)\            
           )____)____)_____)\\         
         _____|____|____|____\\\__      
---------\                   /--------- 
  ^^^^^ ^^^^^^^^^^^^^^^^^^^^^           
    ^^^^      ^^^^     ^^^    ^^        
         ^^^^      ^^^                  
         thanks for looking at the console
  `
  )
  return ( 
  <Container>
      <Nav />
    <Switch>
      <Route exact path='/' render={ rProps => <Home {...rProps} />} />
      <Route exact path='/contact' render={ rProps => <Contact {...rProps} />} />
    </Switch>
  </Container>
  );
};

const Container = withContext(styled.div`
  font-family: Muli;
  font-weight: bold;
  background: #FFFFFF;
  @media only screen and (max-width: 1000px) {
      margin-bottom: 45pt;
    }
    @media only screen and (min-width: 1000px) {
      margin-top: 45pt;
      
    }


  h2 {
    font-size: 20pt;
  }
  h3 {
    font-size: 17pt;
  }
  h4 {
    font-size: 13pt;
  }
  p {
    font-size: 10pt;
  }

  a {
  text-decoration: none;
  color: #7c7e7f;
  transition: 0.5s;
  font-weight: 1000;
  font-style: italic;

}
a:hover {
  box-shadow: 3px 0 27px -25px rgba(0,0,0,0.75);
  color: #2e2f30;
}

img {
  transition: 0.5s;
  
}
img:hover {
  box-shadow: 3px 0 27px -25px rgba(0,0,0,0.75);
}

button {

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
}

button:hover {
background-color:#f6f6f6;
}
button:active {
position:relative;
top:1px;
}
`);

export default withContext(App);