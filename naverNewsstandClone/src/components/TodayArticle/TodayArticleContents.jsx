import React from 'react';

import './TodayArticleContents.css';

const TodayArticleContents = (props) => {
  switch (props.select) {
    case 0:
      return <h1>엔터테인먼트</h1>;
    case 1:
      return <h1>'스포츠'</h1>;
    case 2:
      return <h1>자동차</h1>;
    case 3:
      return <h1>웹툰</h1>;
    case 4:
      return <h1>경제M</h1>;
    case 5:
      return <h1>추천 구독</h1>;
    case 6:
      return <h1>레시피</h1>;
    case 7:
      return <h1>리빙</h1>;
  }
};

export default TodayArticleContents;
