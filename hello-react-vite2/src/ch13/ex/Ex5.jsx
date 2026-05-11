import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const navStyle = { marginRight: '12px', textDecoration: 'none', color: '#555' };
const activeStyle = { ...navStyle, color: 'royalblue', fontWeight: 'bold' }; // 가독성을 위해 파란색 계열 권장

const Ex5 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* 공통 헤더 */}
      <header style={{ background: '#f0f0f0', padding: '12px', borderBottom: '1px solid #ddd' }}>
        {/* 홈 링크 */}
        <NavLink
          to="/"
          end
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          🏠 홈
        </NavLink>

        {/* 📋 게시판 링크 추가 (실습 요구사항) */}
        <NavLink
          to="/posts"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          📋 게시판
        </NavLink>

        {/* 기존 연습용 링크들 */}
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          소개
        </NavLink>

        <NavLink
          to="/articles"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          기사목록
        </NavLink>

        <NavLink
          to="/useNavigate"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          Navigate테스트
        </NavLink>

        <NavLink
          to="/myPage2"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          마이페이지
        </NavLink>

        <NavLink
          to="/login"
          style={({ isActive }) => ({
            ...navStyle,
            color: isActive ? 'green' : 'orange',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          💛로그인
        </NavLink>

        {/* 시계 표시 */}
        <span style={{ marginLeft: '20px', fontSize: '0.9rem', color: '#888' }}>
          ⏲️ {time}
        </span>
      </header>

      {/* 페이지 내용: Posts, Home, PostDetail 등이 여기에 렌더링됨 */}
      <main style={{ padding: '20px', minHeight: '600px' }}>
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