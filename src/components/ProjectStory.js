import React, {useEffect, useState} from 'react';
import {withContext} from '../providers/ThemeProvider'
import gitHub from '../images/github.png'
import mouse from '../images/mouse.png'
import phone from '../images/phone.png'
import {Link} from 'react-router-dom'

const ProjectStory = (props) => {
  const {type, name, images,  description, repo, url, contribution} = props.proj
  const [currentImage, setCurrentImage] = useState(-1)
  const [image, setImages] = useState([])
  
  const photos = images.map(pic => pic.photo)
  const story = images.map(tale => tale.story)


  useEffect(() => {
    setImages(...images)
   },[])

   const nextImage = () => {
    currentImage < images.length && setCurrentImage(prev => (prev + 1))
  }
  const prevImage = () => {
    currentImage > -1 && setCurrentImage(prev => (prev - 1))
  }






  return (
    <>
      {currentImage === -1 && <h3><em>{type}</em></h3>}
        {story.length === 0 && currentImage === story.length ? <p>story comming soon, in the mean time...<br /><Link to='/contact'><em>ask me about it</em></Link> or...<br /> <a target="_blank" href={url}>Check out the site</a> </p> : null}
        { photos.length > 0 && photos[currentImage] !== undefined ?  <>
            <img height="200" width="200" src={photos[currentImage]} />
            <p>{story[currentImage]}</p>
            </>
            :
          null
          }
          
          <br />
          <button onClick={prevImage}>⤆</button>
          <button onClick={nextImage}>⤇</button>

          
        {currentImage === -1 && <> 
        <p>{description}</p>
            <a target="_blank" href={repo}> gitHub<img src={gitHub} width='40' /></a>
              
            <a target="_blank" href={url}><img src={mouse} width="40" />See the site</a>
            {type === 'Enterprise Level' ? null 
            : 
            <p><em>Note:</em> it may take a second for server to load.</p>}
          <p><em>My contributions:</em> {contribution}</p> 
          </>
        }
          {currentImage === story.length && <> 
        <p>Thanks for checking that out. if you would like to know more here is the link.</p>
            <a target="_blank" href={repo}> gitHub<img src={gitHub} width='40' /></a>
            <a target="_blank" href={url}><img src={mouse} width="40" />See the site</a>
            <br />
            <Link to='/contact'><img width='40' src={phone} />contact</Link>
            <h1>Checkout the rest of my projects.</h1>
            <h1>⇓</h1>
          </>}
    </>
  );
};

export default withContext(ProjectStory);