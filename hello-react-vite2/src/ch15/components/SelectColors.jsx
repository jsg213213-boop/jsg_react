import { ColorConsumer } from '../contexts/ColorContext2';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => (
  <div style={{ padding: '10px' }}>
    <h2>색상을 선택하세요.</h2>
    <p style={{ color: '#888', fontSize: '0.85rem' }}>
      좌클릭: 메인 색상 변경 | 우클릭: 서브 색상 변경
    </p>
    <ColorConsumer>
      {({ actions }) => (
        <div style={{ display: 'flex', gap: '4px' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
              onClick={() => actions.setColor(color)}
              onContextMenu={e => {
                e.preventDefault(); // 우클릭 메뉴 방지
                actions.setSubcolor(color);
              }}
            />
          ))}
        </div>
      )}
    </ColorConsumer>
    <hr />
  </div>
);

export default SelectColors;