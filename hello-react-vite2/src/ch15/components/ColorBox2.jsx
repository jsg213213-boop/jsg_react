import { ColorConsumer } from '../contexts/ColorContext2';

const ColorBox2 = () => (
  <ColorConsumer>
    {({ state }) => (
      <div style={{ padding: '10px' }}>
        {/* 메인 색상 박스 (큰 박스) */}
        <div
          style={{
            width: '64px',
            height: '64px',
            background: state.color,
            border: '2px solid #333',
            marginBottom: '8px',
          }}
        />
        {/* 서브 색상 박스 (작은 박스) */}
        <div
          style={{
            width: '32px',
            height: '32px',
            background: state.subcolor,
            border: '1px solid #333',
          }}
        />
      </div>
    )}
  </ColorConsumer>
);

export default ColorBox2;
