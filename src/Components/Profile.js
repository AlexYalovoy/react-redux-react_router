import React from 'react';
import isEmpty from '../helpers/isEmpty';
import '../Css/profile.css';
import PropTypes from 'prop-types';


const Profile = (props) => {
  const profile = props.profile;
  let city;
  let languages;
  let socials;

  if (profile.err) {
    return (
      <div>
        <h2>{profile.err}</h2>
      </div>
    );
  }

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
  // Если в пропсах уже пришла User info делаем парсинг
  if ( !isEmpty(profile) ) {
    const result = parseInfo(profile);

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

Profile.propTypes = {
  profile: PropTypes.object
}

export default Profile;