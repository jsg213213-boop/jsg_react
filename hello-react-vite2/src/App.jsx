import './App.css';

function App() {
  const name = '오늘의 점심메뉴=냉우동';
  const name2 = '리액트2';
  const name3 = undefined;
  const style = {
  backgroundColor: 'black',
  color: 'aqua',
  fontSize: '48px',
  fontWeight: 'bold',
  padding: 16
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
      <div style={style}>{name}</div>;
    </>
  );
}

export default App;
