import News from '../Components/News';
import React from 'react';
import {connect} from 'react-redux';
import isEmpty from '../helpers/isEmpty';
import { setNews } from '../Actions';

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

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);