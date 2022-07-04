import React, { useState } from 'react';

import NewsstandBanner from './NewsstandBanner.jsx';
import NewsstandBox from './NewsstandBox.jsx';
import './Newsstand.css';

const Newsstand = () => {
  const [selectedBtn, setSelectedBtn] = useState('total');
  const bannerBtnHandler = (clickedBtn) => {
    setSelectedBtn(clickedBtn);
  };
  return (
    <div className="newsstand">
      <NewsstandBanner onBannerBtnClick={bannerBtnHandler} />
      <NewsstandBox selectedBtn={selectedBtn} />
    </div>
  );
};

export default Newsstand;
