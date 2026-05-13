import ColorBox from './components/ColorBox';
import ColorBox2 from './components/ColorBox2';
import SelectColors from './components/SelectColors';
import ColorContext from './contexts/ColorContext';
import { ColorProvider } from './contexts/ColorContext2';

const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Context API 기본 예제</h1>

    <h3>Provider 없음 → 기본값 'black' 사용</h3>
    <ColorBox />

    <h3>Provider로 'red' 공급</h3>
    <ColorContext.Provider value={{ color: 'red' }}>
      <ColorBox />
    </ColorContext.Provider>

    <h3>Provider로 'blue' 공급</h3>
    <ColorContext.Provider value={{ color: 'blue' }}>
      <ColorBox />
    </ColorContext.Provider>

    <h2>Ex1 실습1</h2>
    <p>ColorBox 컴포넌트에 적용해서, 박스 아래에 색깔 표기함.</p>

    <h2>동적 Context 예시</h2>
    <ColorProvider>
      {/* 이 안의 모든 컴포넌트가 Context 접근 가능 */}
      <div style={{ padding: '20px' }}>
        <h1>동적 Context 예제 🎨</h1>
        <SelectColors />
        <ColorBox2 />
      </div>
    </ColorProvider>
  </div>
);

export default App;
