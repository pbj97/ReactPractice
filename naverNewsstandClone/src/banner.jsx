import Box from './box';
import { useState } from 'react';

function Banner() {
  const [stateValue, setStateValue] = useState(1);
  const onClick = (e) => {
    if (e.target.classList.contains('banner__button--clicked')) {
      return;
    }
    const clickedButton = document.querySelector('.banner__button--clicked');
    clickedButton.classList.remove('banner__button--clicked');
    e.target.classList.add('banner__button--clicked');
    if (e.target.classList.contains('subscribed')) {
      setStateValue(0);
    } else {
      setStateValue(1);
    }
  };

  return (
    <section className="newsstand">
      <header className="banner">
        <a
          href={'https://newsstand.naver.com/'}
          target="_blank"
          className="banner__title"
        >
          <img
            src={'newsstand.png'}
            alt="newsstand"
            className="banner__title__img"
          />
          뉴스스탠드 {'>'}
        </a>
        <button className="banner__button subscribed" onClick={onClick}>
          구독한 언론사
        </button>
        <button
          className="banner__button total banner__button--clicked "
          onClick={onClick}
        >
          전체언론사
        </button>
      </header>
      <Box shouldDisplay={stateValue}></Box>
    </section>
  );
}
export default Banner;
