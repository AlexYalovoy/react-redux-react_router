import News from '../Components/News';
import React from 'react';
import {connect} from 'react-redux';
import isEmpty from '../helpers/isEmpty';
import { SET_NEWS, actionGenerator } from '../Actions';

const NewsContainer = (props) => {
  const news = props.news;
  
  if ( isEmpty(news) ) {
    const xhr = new XMLHttpRequest();
    const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

    xhr.open('get', url);
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);

      switch (response.status) {
        case 'ok' :
          props.setNews(response.data); // Занести ее в стор
          break;
        default :
          
          break;
      }
    }

    xhr.send();
  }

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
    setNews: (params) => dispatch( actionGenerator(SET_NEWS, params) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);