import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const navStyle = { marginRight: '12px', textDecoration: 'none', color: '#555' };
const activeStyle = { ...navStyle, color: 'blue', fontWeight: 'bold' };

const Ex5 = () => {
  // 실습5
  // 순서1,
  // 상태 관리, 현재 시간 담을 상태 변수 및 세터 함수 지정,
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // 순서2,
  // useEffect를 이용해서, 한번 생성한 함수를 재사용, setInterval 콜백함수 이용해서,
  // 1초당, 현재 시간을 나타내기.
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // 언마운트 , 화면에서 제거시, 타이머 해제
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* 공통 헤더 */}
      <header style={{ background: '#f0f0f0', padding: '12px' }}>
        <NavLink
          to="/"
          end // 정확히 /일 때만 active (하위 경로 제외)
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          홈
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          소개
        </NavLink>
        <NavLink
          to="/profiles/lsy"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          프로필
        </NavLink>
        {/* 순서3, 화면에 표시하기.  */}
        <span>⏲️: {time}</span>
      </header>

      {/* 페이지 내용: 각 라우트의 컴포넌트가 여기에 렌더링 */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>

      {/* 공통 푸터 */}
      <footer
        style={{
          background: '#333',
          color: '#fff',
          padding: '12px',
          textAlign: 'center',
        }}
      >
        © 2026 React Router Tutorial K401
      </footer>
    </div>
  );
};

export default Ex5;
