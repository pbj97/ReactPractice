import React, { useState } from 'react';

import './NewsstandContents.css';

const NewsstandContents = (props) => {
  let index = 0;
  const [view, setView] = useState(true);
  return (
    <div
      key={index++}
      onMouseOver={() => setView(false)}
      onMouseOut={() => setView(true)}
      className={`box__item`}
    >
      <div className={`box__item__img`}>
        {view && <img src={props.press[0]} alt={props.press[1]} />}
        {!view && (
          <div>
            <button className="box__item__button">구독</button>
            <button className="box__item__button">기사보기</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsstandContents;
