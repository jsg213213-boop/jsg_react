import { ColorConsumer } from '../contexts/ColorContext2';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// ### 📝 실습 문제 2
// > SelectColors 컴포넌트에서 현재 선택된 메인 색상과
// 서브 색상 이름을 색상 팔레트 아래에 텍스트로 표시하세요.

// > 예: `"메인: blue | 서브: red"`

// > 힌트: `state`도 함께 구조분해 해야 합니다.
// >
const Ex2 = () => (
  <div style={{ padding: '10px' }}>
    <h2>색상을 선택하세요.</h2>
    <p style={{ color: '#888', fontSize: '0.85rem' }}>
      좌클릭: 메인 색상 변경 | 우클릭: 서브 색상 변경
    </p>
    <ColorConsumer>
      {({ state, actions }) => (
        <div>
          <div style={{ display: 'flex', gap: '4px' }}>
            {colors.map((color) => (
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
                onContextMenu={(e) => {
                  e.preventDefault(); // 우클릭 메뉴 방지
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
          <p>
            메인 색깔: <span>{state.color}</span>
            보조 색깔: <span>{state.subcolor}</span>
          </p>
        </div>
      )}
    </ColorConsumer>
    <hr />
  </div>
);

export default Ex2;
