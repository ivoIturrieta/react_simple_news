import React from 'react';
import NewsItem from './news_list_item';

const newsList = props => {
  const items = props.news.map(item => {
    return <NewsItem key={item.id} item={item} />;
  });
  return <div>{items}</div>;
};

export default newsList;
