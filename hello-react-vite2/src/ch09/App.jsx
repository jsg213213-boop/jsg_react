// App.jsx
import './App.css';
import Practice from './Practice';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import SassEx1 from './SassEx1';
import SassComponent from './SassComponent';
const App = () => (
  <div className="App">
    <header>
      <img className="logo" src="favicon.svg" alt="logo" />
      <p>Hello React!</p>
    </header>
    <h1> ch09 React 스타일링 예시</h1>
    <h2>Practice</h2>
    <Practice></Practice>
    <h2>실습1</h2>
    <Ex1
      title="안녕하세요. 좋은 아침입니다~"
      content="컴포넌트 스타일링 실습 중!"
    ></Ex1>

    <h2>실습2</h2>
    <Ex2>점심메뉴</Ex2>

    <h2>Sass 예제1</h2>
    <p>버튼에 색상, 크기, 모서리 설정 부분 변수로 이용해서 사용해보기.</p>
    <SassEx1></SassEx1>

    <h2>Sass 예제2</h2>
    <p>공통 util.scss 에서 만든 내용을 SassComponent.scss 활용 연습 확인.</p>
    <SassComponent></SassComponent>
  </div>
  
);

export default App;
