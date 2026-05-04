// App.jsx
import './App.css';
import Practice from './Practice';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
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
  </div>
);

export default App;
