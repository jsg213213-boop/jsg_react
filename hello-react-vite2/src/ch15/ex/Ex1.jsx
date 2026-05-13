import ColorContext from '../contexts/ColorContext';

const Ex1 = () => (
  <ColorContext.Consumer>
    {value => (
      <div style={{ marginBottom: '20px' }}>
        {/* 색상 박스 */}
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
            border: '1px solid #333',
          }}
        />
        {/* 박스 바로 아래 색상 이름 표시 */}
        <div style={{ marginTop: '5px', fontWeight: 'bold' }}>
          현재 색상: {value.color}
        </div>
      </div>
    )}
  </ColorContext.Consumer>
);

export default Ex1;