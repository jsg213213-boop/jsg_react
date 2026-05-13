import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const ColorBox3 = () => {
  const { state } = useContext(ColorContext); // 한 줄로 Context 접근!

  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const isDark = theme === 'dark';

  return (
    <div style={{ padding: '10px' }}>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
          fontSize: state.fontSize,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
          border: '1px solid #333',
        }}
      />
      <p
        style={{
          fontSize: state.fontSize,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      >
        폰트 크기 테스트
      </p>
      <div
        style={{
          padding: '20px',
          background: isDark ? '#333' : '#fff',
          color: isDark ? '#fff' : '#333',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      >
        <h2>ColorBox3 내부에 대시보드 내용 가져와서 재사용</h2>
        <p>여기서도, 전역 저장소에 접근해서 이용 가능함.</p>
        <p>
          현재 테마: <strong>{theme}</strong>
        </p>
        <p>
          사용자: <strong>{user.name}</strong>
          {user.isLoggedIn ? ' ✅ 로그인됨' : ' ❌ 미로그인'}
        </p>
      </div>
    </div>
  );
};

export default ColorBox3;
