import { Link } from 'react-router-dom';

const Ex7_Home = () => {
  return (
    <div>
      <h1>실습 7 홈 페이지 🏠</h1>
      <p>환영합니다! 여기는 메인 홈 화면입니다.</p>
      <li>
        <Link to="/posts/jsg">정성규 프로필</Link>
      </li>
    </div>
  );
};

export default Ex7_Home;
