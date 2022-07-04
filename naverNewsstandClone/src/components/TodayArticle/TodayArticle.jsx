import React, { useState } from 'react';

import TodayArticleBanner from './TodayArticleBanner';
import TodayArticleContents from './TodayArticleContents';
const TodayArticle = () => {
  const [selectedItem, SetSelectedItem] = useState(0);

  const selectBannerHandler = (selected) => {
    SetSelectedItem(selected);
  };
  return (
    <div className="today-article">
      <TodayArticleBanner selectBanner={selectBannerHandler} />
      <TodayArticleContents select={selectedItem} />
    </div>
  );
};

export default TodayArticle;
