import React from 'react';
import { useState } from 'react';

import './NewsstandBanner.css';

function NewsStandBanner(props) {
  const [clickedBtn, setClickedBtn] = useState('total');

  const subscribeBtnHandler = () => {
    setClickedBtn('subscribe');
    props.onBannerBtnClick('subscribe');
  };

  const totalBtnHandler = () => {
    setClickedBtn('total');
    props.onBannerBtnClick('total');
  };

  return (
    <header className="banner">
      <a
        href={'https://newsstand.naver.com/'}
        target="_blank"
        rel="noreferrer"
        className="banner__title"
      >
        <img
          src={'newsstand.png'}
          alt="newsstand"
          className="banner__title__img"
        />
        뉴스스탠드 {'>'}
      </a>
      <button
        className={`banner__button subscribed ${
          clickedBtn === 'subscribe' ? 'clicked' : ''
        }`}
        onClick={subscribeBtnHandler}
      >
        구독한 언론사
      </button>
      <button
        className={`banner__button total ${
          clickedBtn === 'total' ? 'clicked' : ''
        }`}
        onClick={totalBtnHandler}
      >
        전체언론사
      </button>
    </header>
  );
}
export default NewsStandBanner;
