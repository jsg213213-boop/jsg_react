// App.jsx
import './App.css';
import Practice from './Practice';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import SassEx1 from './SassEx1';
import SassComponent from './SassComponent';
import ButtonGroup from './ButtonGroup';
import Navbar from './Navbar';
import CSSModule from './CSSModule';
import Badge from './Badge';
import ToggleButton from './ToggleButton';
import StyledComponent from './StyledComponent';
import Input from './Input';
import Card from './Card';
const App = () => (
  <div className="App">
    <header>
      <img className="logo" src="favicon.svg" alt="logo" />
      <p>Hello React!</p>
    </header>
    <h1> ch09 React 스타일링 예시</h1>
    <h2>Practice</h2>
    <Practice></Practice>
    <h2>실습1-1</h2>
    <Ex1
      title="안녕하세요. 좋은 아침입니다~"
      content="컴포넌트 스타일링 실습 중!"
    ></Ex1>

    <h2>실습1-2</h2>
    <Ex2>점심메뉴</Ex2>

    <h2>Sass 예제1</h2>
    <p>버튼에 색상, 크기, 모서리 설정 부분 변수로 이용해서 사용해보기.</p>
    <SassEx1></SassEx1>

    <h2>Sass 예제2</h2>
    <p>공통 util.scss 에서 만든 내용을 SassComponent.scss 활용 연습 확인.</p>
    <SassComponent></SassComponent>
    <h2>실습2-1</h2>
  <ButtonGroup>
    <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <button size="sm">sm 버튼</button>
      <button size="md">md 버튼</button>
      <button size="lg">lg 버튼</button>
      <button size="md" variant="danger">
        danger 버튼
      </button>

      <br />
      </div>
  </ButtonGroup>
    <h2>실습2-2</h2>
      <Navbar></Navbar>
      <h2>CSSModule.css 예제</h2>
    <p>CSSModule 를 이용한 자동 클래스명 생성 예시</p>
    <CSSModule></CSSModule>
    <h3>실습3-1:Badge 컴포넌트</h3>
      <Badge type="success">성공</Badge>
      <Badge type="warning">경고</Badge>
      <Badge type="error">오류</Badge>

      <hr />

      <h3>실습 3-2:토글 버튼</h3>
      <ToggleButton />
      <h3>Styled Components</h3>
      <StyledComponent></StyledComponent>
      <h3>실습 4-1: Input StyledComponent</h3>
      <Input></Input>
      <h3>실습 4-2: Card StyledComponent</h3>
      <Card variant="primary">Primary Card</Card>
      <Card variant="secondary">Secondary Card</Card>
  </div>
  
);

export default App;
