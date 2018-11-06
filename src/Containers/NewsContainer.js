import News from '../Components/News';
import React from 'react';
import {connect} from 'react-redux';
import isEmpty from '../helpers/isEmpty';
import { setNews } from '../Actions';
import PropTypes from 'prop-types';

const NewsContainer = (props) => {
  const news = props.news;
  
  if ( isEmpty(news) )
    props.setNews();

  return(
    <News news = {props.news}/>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setNews: setNews(dispatch)
  }
}

NewsContainer.propTypes = {
  news: PropTypes.object.isRequired,
  setNews: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);