import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const isDark = theme === 'dark';

  return (
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
      <h2>대시보드</h2>
      <p>
        현재 테마: <strong>{theme}</strong>
      </p>
      <p>
        사용자: <strong>{user.name}</strong>
        {user.isLoggedIn ? ' ✅ 로그인됨' : ' ❌ 미로그인'}
      </p>
    </div>
  );
};

export default Dashboard;
