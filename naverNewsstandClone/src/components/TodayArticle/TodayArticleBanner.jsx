import React, { useState } from 'react';

import './TodayArticleBanner.css';

const TodayArticleBanner = (props) => {
  const [pageNum, setPageNum] = useState(0);
  const leftBtnHandler = () => {
    if (pageNum === 0) {
      return;
    }
    setPageNum((prevState) => {
      props.selectBanner(prevState - 1);
      return prevState - 1;
    });
  };

  const rightBtnHandler = () => {
    if (pageNum === 7) {
      return;
    }
    setPageNum((prevState) => {
      props.selectBanner(prevState + 1);
      return prevState + 1;
    });
  };

  const handler1 = () => {
    setPageNum(0);
    props.selectBanner(0);
  };
  const handler2 = () => {
    setPageNum(1);
    props.selectBanner(1);
  };
  const handler3 = () => {
    setPageNum(2);
    props.selectBanner(2);
  };
  const handler4 = () => {
    setPageNum(3);
    props.selectBanner(3);
  };
  const handler5 = () => {
    setPageNum(4);
    props.selectBanner(4);
  };
  const handler6 = () => {
    setPageNum(5);
    props.selectBanner(5);
  };
  const handler7 = () => {
    setPageNum(6);
    props.selectBanner(6);
  };
  const handler8 = () => {
    setPageNum(7);
    props.selectBanner(7);
  };
  return (
    <div className="today-article__banner">
      <div className="today-article__banner__title">
        <strong className="title">오늘 읽을만한 글</strong>
        <span className="sub-title">주제별로 분류된 다양한 글 모음</span>
        <span className="info">
          <strong>671</strong> 개의 글 ㅣ 관심주제 설정
        </span>
      </div>
      <ul className="today-article__banner__buttons">
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 0 && 'clicked a'
            }`}
            onClick={handler1}
          >
            엔터
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 1 && 'clicked b'
            }`}
            onClick={handler2}
          >
            스포츠
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 2 && 'clicked c'
            }`}
            onClick={handler3}
          >
            자동차
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 3 && 'clicked d'
            }`}
            onClick={handler4}
          >
            웹툰
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 4 && 'clicked e'
            }`}
            onClick={handler5}
          >
            경제M
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 5 && 'clicked f'
            }`}
            onClick={handler6}
          >
            추천구독
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 6 && 'clicked g'
            }`}
            onClick={handler7}
          >
            레시피
          </button>
        </li>
        <li>
          <button
            className={`today-article__banner__button ${
              pageNum === 7 && 'clicked h'
            }`}
            onClick={handler8}
          >
            리빙
          </button>
        </li>
      </ul>
      {pageNum !== 0 && (
        <button
          className="today-article__banner__left-button"
          onClick={leftBtnHandler}
        >
          {'<'}
        </button>
      )}
      {pageNum !== 7 && (
        <button
          className="today-article__banner__right-button"
          onClick={rightBtnHandler}
        >
          {'>'}
        </button>
      )}
    </div>
  );
};

export default TodayArticleBanner;
