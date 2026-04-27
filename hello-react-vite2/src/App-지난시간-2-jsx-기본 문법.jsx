import './App.css';

function App() {
  const name = '오늘 점심 뭐 먹죠?';
  const name2 = '리액트2';
  const name3 = undefined;

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <p>JSX 안에서 자바스크립트 표현식을 통해 {} 안에 코드를 넣으면 됩니다.</p>
      <div>
        <p>2.4.3 If 문 대신 조건부 연산자 (삼항 연산자)</p>
        {name2 === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
      </div>
      <div>{name2 === '리액트2' && <h1>리액트2입니다.</h1>}</div>
      <div>{name3 || '값이 undefined입니다.'}</div>
      <div style={style}>{name}</div>
      {/* 주석할 때, IDE , ctrl + / */}
      {/* return 내부의 공간에서, 주석 예시 작성  */}
      <div
        className="counter"
        //  div 태그 내에서, 3번째 줄에서, 주석을 예시로 작성 중입니다.
      >
        {name}
      </div>
    </>
  );
}

export default App;
