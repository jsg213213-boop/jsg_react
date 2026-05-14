import './util.scss';

const SassEx1 = () => {
  return (
    <div>
      <button className="button">SassEx1-버튼</button>

      <div className="card">
        <h2 className="title">카드에 중첩으로 요소들 적용해보기 </h2>
        <p>오늘의 점심메뉴:냉우동+돈가스세트</p>
      </div>

      <div>
        <div>
          <h2>믹스인 기능 이용해보기(마치 함수 사용하는 것과 비슷함)</h2>

          <div className="container">
            <div className="box-step1"></div>
            <div className="box-step2"></div>
            <div className="box-step3"></div>
            <div className="box-step4"></div>
            <div className="box-step5"></div>
            <div className="box-step6"></div>
            <div className="box-step7"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SassEx1;
