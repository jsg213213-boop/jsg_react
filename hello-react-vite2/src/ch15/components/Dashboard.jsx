import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';
import LanguageContext from '../contexts/LanguageContext';

const texts = {
  ko: { title: '대시보드', themeLabel: '현재 테마', userLabel: '사용자' },
  en: { title: 'Dashboard', themeLabel: 'Current theme', userLabel: 'User' },
};

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const lang = useContext(LanguageContext);

  const isDark = theme === 'dark';
  const lang2 = texts[lang];

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

      <p>언어 변경 테스트</p>
      <h2>{lang2.title}</h2>
      <p>
        {lang2.themeLabel}: <strong>{theme}</strong>
      </p>
      <p>
        {lang2.userLabel}: <strong>{user.name}</strong>
        {user.isLoggedIn ? ' ✅ 로그인됨' : ' ❌ 미로그인'}
      </p>
    </div>
  );
};

export default Dashboard;
