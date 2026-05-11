import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈 페이지 🏠</h1>
      <p>환영합니다! 여기는 메인 홈 화면입니다.</p>
      <li><Link to="/profiles/sunggyu">정성규의 프로필</Link></li>
        <li><Link to="/profiles/jiyeon">김지연의 프로필</Link></li>
        <li><Link to="/profiles/yeorum">이여름의 프로필</Link></li>
    </div>
  );
};

export default Home;
