import React, { Component } from 'react';
import storeLogin from '../images/website-story/login.png'
import uploadArt from '../images/website-story/uploadArt.png'
import artOnDisplay from '../images/website-story/ArtONDisplay.png'
import buyArt from '../images/website-story/buyArt.png'
import successfulBuy from '../images/website-story/successfulBuy.png'
import confirBuy from '../images/website-story/confirBuy.png'
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
      images: [
        {photo: storeLogin, story: 'full login functionality with profile picture'},
        {photo: uploadArt, story: 'upload your art.'},
        {photo: artOnDisplay, story: 'you can display your art or...'},
        {photo: buyArt, story: 'buy someone elses'},
        {photo: successfulBuy, story: 'with working stripe api'},
        {photo: confirBuy, story: 'site mailer sends buyer and seller a receipt, you can also look at your purchase and selling history.'},

      ],

    },
    {
      name: 'Grey Mountain Art',
      type: 'Freelance Work',
      description: 'A website for an artist to showcase there artwork and attract customers',
      repo: 'https://github.com/TallanGroberg/grey-mountain-art',
      url: 'https://greymountainart.surge.sh/',
      contribution: 'Implimented all features with react-router-dom, styled-components, published to surge.',
      images: [],
    },
      {
        name: 'Blog it up',
        type: 'Full-stack',
        description: 'A full stack blogging application designed to help users have a sense of community.',
        repo: 'https://github.com/TallanGroberg/blog-it-up',
        url: 'https://blog-it-upp.herokuapp.com/',
        contribution: 'Worked on database architecture design, user authentication,  wrote custom middleware, published to heroku. Built With: mongoose, mongoDB, express, nodeJS, React, Styled-components',
        images: [],
      },
      {
      name: 'Query app',
      type: 'Back-end',
      description: 'a web application to help teachers see how much information students retained from a lecture by issuing short quizzes and giving teachers the ability to see a students answers and grade questions and give feedback to the student',
      repo: 'https://github.com/devpointlabs/query-app',
      url: 'http://query-app.herokuapp.com',
      contribution: 'implimented the user authentification. designed the databases architecture, grading system and teacher side UI. the primary technologies are Ruby on Rails and reactJS.',
      images: [],
    },
    { 
      name: 'three js',
      type: 'digital art',
      description: 'a basic web interfacing with webGL using threeJS',
      repo: 'https://github.com/TallanGroberg/start-three.js',
      url: 'https://TallanGroberg.github.io/start-three.js/',
      contribution: 'implimented all functionality',
      images: [],
    },
    {
      name: 'web-pack config for react',
      type: 'Tutorial',
      description: 'a customized webpack with dependencies to compile code for production while writing React and a tutorial to help set it up. See the site for details',
      repo: 'https://github.com/TallanGroberg/webpack-for-react',
      url: 'https://dev.to/tallangroberg/customizing-webpack-config-to-run-react-1ji4',
      contribution: 'implimented all features and wrote tutorial series',
      images: [],
    },
    {
      name: 'Stripe API tutoral',
      type: ' Tutorial series',
      description: 'a tutorial about how to impliment stripe API to test mode.',
      repo: 'https://github.com/TallanGroberg/payment-system',
      url: 'https://dev.to/tallangroberg/using-stripe-to-make-credit-card-charges-part-1-3mgd',
      contribution: 'Implimented all features, wrote tutorial',
      images: [],
    },
    {
      name: 'firebase image uploads',
      type: 'Tutorial',
      description: 'technical writing to achieve image uploads with react and firebase.',
      repo: 'https://github.com/TallanGroberg/imageupload-tutorial',
      url: 'https://dev.to/tallangroberg/how-to-do-image-upload-with-firebase-in-react-cpj',
      contribution: 'Wrote all technical aspects',
      images: [],
    },
  ]
}
// {
//   name: '',
//   type: '',
//   description: '',
//   repo: '',
//   url: '',
//   contribution: '',
// },

// {photo: '', story: ''}



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