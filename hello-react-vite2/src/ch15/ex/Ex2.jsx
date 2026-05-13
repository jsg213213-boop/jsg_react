import { ColorConsumer } from '../contexts/ColorContext2';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const Ex2 = () => (
  <div style={{ padding: '10px' }}>
    <h2>색상을 선택하세요.</h2>
    <p style={{ color: '#888', fontSize: '0.85rem' }}>
      좌클릭: 메인 색상 변경 | 우클릭: 서브 색상 변경
    </p>

    {/* 힌트대로 state와 actions를 함께 구조 분해 할당합니다 */}
    <ColorConsumer>
      {({ state, actions }) => (
        <div>
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
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
          
          {/* 실습 문제 2: 현재 선택된 색상 이름을 텍스트로 표시 */}
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
            메인: <span style={{ color: state.color }}>{state.color}</span> | 
            서브: <span style={{ color: state.subcolor }}>{state.subcolor}</span>
          </div>
        </div>
      )}
    </ColorConsumer>
    <hr />
  </div>
);

export default Ex2;