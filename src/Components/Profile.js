import React from 'react';
import isEmpty from '../helpers/isEmpty';
import '../Css/profile.css';
import PropTypes from 'prop-types';


const Profile = (props) => {
  let profile = props.profile;

  if (profile.err) {
    return (
      <div>
        <h2>{profile.err}</h2>
      </div>
    );
  }

  function parseInfo(info) {
    const city = info.city;
    let socials = info.socials;
    const languages = info.languages.map( lang => <li key={lang}>{lang}</li> );

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
    profile = parseInfo(profile);
  }

  const city = profile && profile.city;
  const languages = profile && profile.languages;
  const socials = profile && profile.socials;
  
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