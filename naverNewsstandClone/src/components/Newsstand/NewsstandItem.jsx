import React, { useState, useRef } from 'react';

import pressList from './pressList';
import NewsstandContents from './NewsstandContents';
import './NewsstandItem.css';

const NewsstandItem = () => {
  const [pageNum, setPageNum] = useState(0);

  const leftBtnHandler = () => {
    if (pageNum === 0) {
      return;
    }
    setPageNum((prevState) => {
      return prevState - 1;
    });
  };

  const rightBtnHandler = () => {
    if (pageNum === 3) {
      return;
    }
    setPageNum((prevState) => {
      return prevState + 1;
    });
  };

  let selectedList = pressList[pageNum];

  const items = selectedList.map((press) => (
    <NewsstandContents press={press} />
  ));

  return (
    <section div className="box">
      {items}
      {pageNum !== 0 && (
        <button className="box__left-button" onClick={leftBtnHandler}>
          {'<'}
        </button>
      )}
      {pageNum !== 3 && (
        <button className="box__right-button" onClick={rightBtnHandler}>
          {'>'}
        </button>
      )}
    </section>
  );
};

export default NewsstandItem;
