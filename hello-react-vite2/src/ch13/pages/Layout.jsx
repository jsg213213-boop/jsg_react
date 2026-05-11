import { Outlet, NavLink } from 'react-router-dom';

const navStyle = { marginRight: '12px', textDecoration: 'none', color: '#555' };
const activeStyle = { ...navStyle, color: 'blue', fontWeight: 'bold' };

const Layout = () => (
  <div>
    {/* 공통 헤더 */}
    <header style={{ background: '#f0f0f0', padding: '12px' }}>
      <NavLink
        to="/"
        end  // 정확히 /일 때만 active (하위 경로 제외)
        style={({ isActive }) => isActive ? activeStyle : navStyle}
      >
        홈
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => isActive ? activeStyle : navStyle}
      >
        소개
      </NavLink>
      <NavLink
        to="/profiles/jsg"
        style={({ isActive }) => isActive ? activeStyle : navStyle}
      >
        프로필
      </NavLink>
    </header>

    {/* 페이지 내용: 각 라우트의 컴포넌트가 여기에 렌더링 */}
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>

    {/* 공통 푸터 */}
    <footer style={{ background: '#333', color: '#fff', padding: '12px', textAlign: 'center' }}>
      © 2024 React Router Tutorial
    </footer>
  </div>
);

export default Layout;