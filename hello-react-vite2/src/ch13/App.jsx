import { Route, Routes, NavLink } from 'react-router-dom'; // NavLink 추가
import Home from './pages/Home';
import About from './pages/About';
import Ex1 from './ex/Ex1';
import Profile from './pages/Profile';
import Ex2 from './ex/Ex2';
import Ex3 from './ex/Ex3';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Ex4 from './ex/Ex4';
import Ex5 from './ex/Ex5'; // Layout 역할
import UseNavigate from './pages/UseNavigate';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Ex6 from './ex/Ex6';

// 추가되는 컴포넌트 (파일 분리 권장이나 실습을 위해 여기에 작성)
import Posts from './pages/Posts'; 
import PostDetail from './pages/PostDetail';

const App = () => {
  // NavLink 스타일 설정
  const activeStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "royalblue" : "gray",
    textDecoration: "none",
    marginRight: "15px"
  });

  return (
    <div>
      <h1>ch13 리액트 라우팅 연습</h1>
      <h2>"react-router-dom": "^7.15.0"</h2>

      {/* 1. 요구사항: 헤더에 홈/게시판 NavLink 적용 */}
      <nav style={{ padding: '10px', borderBottom: '2px solid #eee' }}>
        <NavLink to="/" style={activeStyle}>홈</NavLink>
        <NavLink to="/posts" style={activeStyle}>게시판</NavLink>
        <NavLink to="/about" style={activeStyle}>소개</NavLink>
        <NavLink to="/articles" style={activeStyle}>기사목록</NavLink>
      </nav>
      
      <hr />

      <Routes>
        {/* 공통 레이아웃 Ex5로 감싸기 */}
        <Route element={<Ex5 />}>
          <Route path="/" element={<Home />} /> {/* 홈: "미니 블로그에 오신 것을 환영합니다"가 Home에 있어야 함 */}
          
          {/* 2. 요구사항: 게시판 중첩 라우팅 */}
          <Route path="/posts" element={<Posts />}>
            <Route path=":id" element={<PostDetail />} />
          </Route>

          {/* 기존 라우트들 */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Ex1 />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/profiles2/:username" element={<Ex2 />} />
          <Route path="/about2" element={<Ex3 />} />
          <Route path="/articles" element={<Articles />}>
            <Route index element={<Ex4 />} />
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="/useNavigate" element={<UseNavigate />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myPage2" element={<Ex6 />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/postsDetail/:id" element={<PostDetail />} />

          {/* 3. 요구사항: 404 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;