import React from 'react';
import isEmpty from '../helpers/isEmpty';

const News = (props) => {
  let newsObj = props.news;
  let news_divs = [];


  if ( isEmpty(newsObj) ) {
    return <h2>News</h2>;
  }

  for (let i in newsObj) {
    news_divs.push(
      <div key = { newsObj[i].id }>
        <h2>{ newsObj[i].title }</h2>
        <p>{ newsObj[i].text }</p>
      </div>
    )
  };

  return (
    <div>
      {news_divs}
    </div>
  )
};

export default News;