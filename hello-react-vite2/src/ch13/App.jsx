import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Ex1 from './ex/Ex1';
import Profile from './pages/Profile';
import Ex2 from './ex/Ex2';
import Ex3 from './ex/Ex3';
import Articles from './pages/Articles';
import Article from './pages/Article';

const App = () => {
  return (
    <div>
      <h1>ch13 리액트 라우팅 연습</h1>
      <h2>"react-router-dom": "^7.15.0"</h2>
      {/* 내비게이션 메뉴 */}
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>|{' '}
        <Link to="/contact">연락처-Ex1</Link> |{' '}
        <Link to="/about2">소개-Ex3</Link> |{' '}
        <Link to="/articles">Articles</Link>
      </nav>
      <hr />
      {/* 라우트 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Ex1 />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/profiles2/:username" element={<Ex2 />} />
        <Route path="/about2" element={<Ex3 />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
