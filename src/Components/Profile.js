import React from 'react';
import isEmpty from '../helpers/isEmpty';
import '../Css/profile.css';


const Profile = (props) => {
  let city;
  let languages;
  let socials;

  function parseInfo(info) {
    const city = info.city;
    const languages = info.languages.map( lang => <li key={lang}>{lang}</li> );

    const webIkon = info.social.filter( e => e.label === 'web' ? true : false );
    const restIkons = info.social.filter( e => e.label !== 'web' ? true : false );
    let socials = [...webIkon, ...restIkons];

    socials = socials.map( soc => (
      <li key={soc.label}>
        <a href = {soc.link} target='_blank'> 
          <img src={ require(`../../public/ikons/${soc.label}.png`) } alt={soc.label} />
        </a>
      </li>
    ));

    return {city, languages, socials}
  }

  if ( !isEmpty(props.profile) ) {
    const result = parseInfo(props.profile);

    city = result.city;
    languages = result.languages;
    socials = result.socials;
  }
  
  return (
    <div>
      <h2>Profile</h2>
      <p>City: {city}</p>
      <p>Languages:</p>
      <ul>
        {languages}
      </ul>
      <p>Links:</p>
      <ul id='links'>
        {socials}
      </ul>
    </div>
  )
};

export default Profile;