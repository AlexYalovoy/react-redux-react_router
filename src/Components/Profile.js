import React from 'react';
import isEmpty from '../helpers/isEmpty';
import '../Css/profile.css';
import PropTypes from 'prop-types';


const Profile = (props) => {

  let profile = props.profile;
  let city, languages, socials;

  if (profile.err) {
    return (
      <div>
        <h2>{profile.err}</h2>
      </div>
    );
  }

  if ( !isEmpty(profile) ) {
    city = profile && profile.city;
    languages = profile && profile.languages.map( lang => <li key={lang}>{lang}</li> );
    socials = profile && profile.socials.map( soc => (
      <li key={soc.label}>
        <a href = {soc.link} target='_blank'> 
          <img src={ require(`../../public/ikons/${soc.label}.png`) } alt={soc.label} />
        </a>
      </li>
    ));
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