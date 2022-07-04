import React from 'react';

import NewsstandError from './NewsstandError';
import NewsstandItem from './NewsstandItem';

const NewsstandBox = (props) => {
  if (props.selectedBtn === 'subscribe') {
    return <NewsstandError />;
  } else if (props.selectedBtn === 'total') {
    return <NewsstandItem />;
  }
};

export default NewsstandBox;
