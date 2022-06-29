import pressList from './pressList';

function Box(props) {
  if (props.stateValue === 0) {
    return (
      <section div className="error">
        <div className="error__title">구독한 언론사가 없습니다.</div>
        <p className="error__msg">
          언론사 구독 설정에서 관심있는 언론사를 구독하시면<br></br>
          언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.
        </p>
        <a
          href="http://newsstand.naver.com/config.html"
          class="error__button"
          target="_blank"
        >
          언론사 구독 설정하기
        </a>
      </section>
    );
  } else if (props.stateValue === 1) {
    const items = pressList.map((press) => (
      <div className="box__item">
        <div className="box__item__img">
          <img src={press[0]} alt={press[1]} />
        </div>
      </div>
    ));
    return (
      <section div className="box">
        {items}
      </section>
    );
  }
}

export default Box;
