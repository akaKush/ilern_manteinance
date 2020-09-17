import React from 'react';
import UnderConstruction from '../lib';
import logo from './Favicon-Logo.png';

const App = () => (
  <UnderConstruction
    background={{
      image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?cs=srgb&dl=pexels-francesco-ungaro-281260.jpg&fm=jpg',
      //image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    logo={{
      src: logo,
      alt: 'logo',
      style: {
        width: '80px'
      }
    }}
    description={{
      text: 'Our website is under manteinance. We\'ll be here soon.',
      style: {
        maxWidth: '440px',
      }
    }}
    /*subscribe={{
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      onSubmit: (value) => {
        console.log('user typed email :', value);
      }
    }}*/
    links={[
      
      {
        url: 'https://www.twitter.com/',
        image: 'https://image.flaticon.com/icons/svg/145/145812.svg',
      },
      {
        url: 'https://www.linkedin.com/company/ilerneducation/',
        image: 'https://image.flaticon.com/icons/svg/145/145807.svg',
      },
      {
        url: 'mailto:hello@ilern.es',
        image: 'https://image.flaticon.com/icons/svg/321/321817.svg',
      },
    ]}
  />
);

export default App;
