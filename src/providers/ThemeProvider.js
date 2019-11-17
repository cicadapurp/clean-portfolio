import React, { Component } from 'react';


const { Provider, Consumer, } = React.createContext()


class ThemeProvider extends Component {

  state = {
    theme: '',
    projectObj: [
    {
      name: 'the-store',
      type: 'Enterprise Level',
      description: 'A store for artist to sell there artwork to prospective clients, full user authentification, stripe api with PCI compliant standards, imageUploading system, deployed to heroku SSL certified, React, express, heroku, firebase, styled-components, axios',
      repo: 'https://github.com/TallanGroberg/store',
      url: 'https://the-stor-e.herokuapp.com',
      contribution: 'implimented all features',
    },
    {
      name: 'Grey Mountain Art',
      type: 'Freelance Work',
      description: 'A website for an artist to showcase there artwork and attract customers',
      repo: 'https://github.com/TallanGroberg/grey-mountain-art',
      url: 'https://greymountainart.surge.sh/',
      contribution: 'Implimented all features with react-router-dom, styled-components, published to surge.',
    },
      {
        name: 'Blog it up',
        type: 'Full-stack',
        description: 'A full stack blogging application designed to help users have a sense of community.',
        repo: 'https://github.com/TallanGroberg/blog-it-up',
        url: 'https://blog-it-upp.herokuapp.com/',
        contribution: 'Worked on database architecture design, user authentication,  wrote custom middleware, published to heroku. Built With: mongoose, mongoDB, express, nodeJS, React, Styled-components',
      },
      {
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
      repo: 'https://github.com/TallanGroberg/rec-sites',
      url: 'http://res-sites.herokuapp.com/',
      contribution: 'implimented all features which includes. National Parks API intergration, react context API for state management, styled components, Axios calls, react-router-dom, react-reveal for animations, persistance of data with local storage',
    },
    { 
      name: 'three js',
      type: 'digital art',
      description: 'a basic web interfacing with webGL using threeJS',
      repo: 'https://github.com/TallanGroberg/start-three.js',
      url: 'https://TallanGroberg.github.io/start-three.js/',
      contribution: 'implimented all functionality',
    },
    {
      name: 'web-pack config for react',
      type: 'Tutorial',
      description: 'a customized webpack with dependencies to compile code for production while writing React and a tutorial to help set it up. See the site for details',
      repo: 'https://github.com/TallanGroberg/webpack-for-react',
      url: 'https://dev.to/tallangroberg/customizing-webpack-config-to-run-react-1ji4',
      contribution: 'implimented all features and wrote tutorial series',
    },
    {
      name: 'Stripe API tutoral',
      type: ' Tutorial series',
      description: 'a tutorial about how to impliment stripe API to test mode.',
      repo: 'https://github.com/TallanGroberg/payment-system',
      url: 'https://dev.to/tallangroberg/using-stripe-to-make-credit-card-charges-part-1-3mgd',
      contribution: 'Implimented all features, wrote tutorial',
    }



  ]
}

// {
//   name: '',
//   type: '',
//   description: '',
//   repo: '',
//   url: '',
//   contribution: '',
// }
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