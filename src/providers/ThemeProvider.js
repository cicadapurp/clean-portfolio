import React, { Component } from 'react';


const { Provider, Consumer, } = React.createContext()


class ThemeProvider extends Component {

  state = {
    theme: '',
    projectObj: [{
      name: 'Query app',
      type: 'Back-end',
      description: 'a web application to help teachers see how much information students retained from a lecture by issuing short quizzes and giving teachers the ability to see a students answers and grade questions and give feedback to the student',
      repo: 'https://github.com/devpointlabs/query-app',
      url: 'http://query-app.herokuapp.com',
      contribution: 'implimented the user authentification. designed the databases architecture, grading system and teacher side UI. the primary technologies are Ruby on Rails and reactJS.',
    },
    {
      name: 'National Parks Dream List',
      type: 'Front-end',
      description: 'users can choose a dream list of there national parks',
      repo: 'https://github.com/cicadapurp/rec-sites',
      url: 'http://res-sites.herokuapp.com/',
      contribution: 'implimented all features which includes. National Parks API intergration, react context API for state management, styled components, Axios calls, react-router-dom, react-reveal for animations, persistance of data with local storage',
    },
    { 
      name: 'three js',
      type: 'digital art',
      description: 'a basic web interfacing with webGL using threeJS',
      repo: 'https://github.com/cicadapurp/start-three.js',
      url: 'https://cicadapurp.github.io/start-three.js/',
      contribution: 'implimented all functionality',

    }
  ]
}
  render() {

    const { theme, projectObj, } = this.state
    return (
      <Provider value={{
        theme,
        projectObj,
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const withContext = C => props => (
  <Consumer>
  { value => <C {...value} {...props} />}
  </Consumer>
)


export default ThemeProvider;